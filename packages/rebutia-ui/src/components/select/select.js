import {
    string,
    bool,
    any,
    array,
    func
} from 'prop-types';

import React, {
    useEffect, useMemo, useState, useRef
} from 'react';
import { useBase } from '../../base/base.js';
import {
    classMap, clamp, isList, hasOwn, nextTick, bindEvents, unbindEvents
} from '../../util/util.js';
//import { useHelper } from './select-helper.js';

import IconX from '../../base/images/icon-x.js';

import './select.scss';

/* eslint-disable max-lines-per-function,max-statements */
const RuiSelect = ({
    label,
    disabled,
    options,
    width,
    searchable,
    value,
    model,
    onRemove,
    children
}) => {

    const { cid } = useBase('RuiSelect');
    const className = classMap(['rui', 'rui-select', cid]);

    const [state] = useState({
        firstUpdated: false,
        isOpen: false,
        shouldOpen: false,
        timeout_display: 0,
        lastDirection: 'down',
        $el: null,
        $list: null,
        $view: null
    });

    const el = useRef(null);

    let setValue = (v) => {};

    if (model) {
        value = model[0];
        setValue = model[1];
    }

    //for view width
    const [viewWidth, setViewWidth] = useState(width);

    //label for view display
    const [selectedLabel, setSelectedLabel] = useState('');
    //value for selected item class
    const [selectedValue, setSelectedValue] = useState(null);
    //for search input
    const [searchValue, setSearchValue] = useState(null);

    const viewValue = useMemo(() => {
        if (searchable && searchValue !== null) {
            return searchValue;
        }
        return selectedLabel;
    }, [searchable, selectedLabel, searchValue]);

    const viewClass = useMemo(() => {
        const ls = ['rui-select-view'];
        if (searchable) {
            ls.push('rui-select-search');
        }
        return classMap(ls);
    }, [searchable]);

    const viewStyle = useMemo(() => {
        if (viewWidth) {
            return {
                'width': `${viewWidth}`
            };
        }
        return {};
    }, [viewWidth]);

    const listStyle = useMemo(() => {
        if (viewWidth) {
            return {
                'minWidth': `${viewWidth}`
            };
        }
        return {};
    }, [viewWidth]);

    //console.log(styleMap);

    //=========================================================================================================

    const windowEvents = {
        resize: {
            handler: (e) => {
                //console.log('resizeHandler');
                close();
            }
        },
        scroll: {
            handler: (e) => {
                //console.log('scrollHandler');
                if (isSelectInner(e.target)) {
                    return;
                }
                if (!isViewParent(e.target)) {
                    return;
                }
                close();
            },
            options: true
        }
    };

    const getEventClosestNode = function(target, cln) {
        if (!target) {
            return;
        }
        if (target.classList.contains(cln)) {
            return target;
        }
        return getEventClosestNode(target.parentNode, cln);
    };

    const onItemClick = (item, e) => {

        //console.log('onItemClick', item);

        setSearchValue(null);
        setSelectedLabel(item.label);
        setSelectedValue(item.value);
        setValue(item.value);

        close();
    };

    const listEvents = {
        mousedown: {
            handler: (e) => {
                const $item = getEventClosestNode(e.target, 'rui-select-item');
                if (!$item) {
                    return;
                }
                const index = parseInt($item.getAttribute('index'));
                const item = list[index];
                const cls = e.target.classList;
                if (cls.contains('rui-select-item-remove')) {
                    onRemove(item, e);
                    return;
                }
                onItemClick(item, e);
            }
        }
    };


    const unbindComponentEvents = () => {
        unbindEvents(windowEvents);
        unbindEvents(listEvents);
    };

    const bindComponentEvents = () => {
        unbindComponentEvents();
        bindEvents(windowEvents, window);
        bindEvents(listEvents, state.$list);
    };

    //=========================================================================================================

    const showList = () => {
        document.body.appendChild(state.$list);
        state.isOpen = true;
    };

    const hideList = () => {
        state.isOpen = false;
        state.$list.remove();
    };

    //=========================================================================================================

    const close = () => {

        //align with open
        state.shouldOpen = false;

        if (!state.isOpen) {
            return;
        }
        state.lastDirection = 'down';
        hideList();
        unbindComponentEvents();
    };

    const closeAsync = () => {
        clearTimeout(state.timeout_display);
        state.timeout_display = setTimeout(() => {
            close();
        }, 100);
    };

    //=========================================================================================================

    const layout = () => {

        const viewRect = state.$view.getBoundingClientRect();
        const listRect = state.$list.getBoundingClientRect();
        const bodyRect = document.body.getBoundingClientRect();

        const top = getListTop(viewRect, listRect, bodyRect);

        let left = Math.max(viewRect.left, 0);
        if (left + listRect.width > bodyRect.width) {
            left = bodyRect.width - listRect.width;
        }

        const st = state.$list.style;
        st.left = `${left}px`;
        st.top = `${top}px`;

        //selected element.scrollIntoView();
        const $selected = state.$list.querySelector('.rui-select-item.selected');
        if ($selected) {
            $selected.scrollIntoView();
        }

    };

    const layoutAsync = () => {

        if (disabled) {
            return;
        }

        if (!state.$el) {
            return;
        }

        if (state.shouldOpen && !state.isOpen) {
            nextTick(() => {
                open();
            });
            return;
        }

        if (!state.isOpen) {
            return;
        }

        nextTick(() => {
            layout();
        });

    };

    const open = () => {
        if (disabled) {
            return;
        }

        state.shouldOpen = true;

        if (state.isOpen) {
            return;
        }

        if (!list.length) {
            return;
        }

        showList();
        layout();
        bindComponentEvents();
    };

    //when opened list and click out side browser will blur
    //then click body will trigger focus and blur, that not make sense
    const openAsync = () => {
        clearTimeout(state.timeout_display);
        state.timeout_display = setTimeout(() => {
            open();
        }, 100);
    };

    //=========================================================================================================

    const isSelectInner = (elem) => {
        if (state.$list === elem) {
            return true;
        }
        let inner = false;
        try {
            inner = state.$list.contains(elem);
        } catch (e) {
            //empty
        }
        return inner;
    };

    const isViewParent = (elem) => {
        const targetElement = state.$view;
        let parent = targetElement.parentNode;
        while (parent) {
            if (parent === elem) {
                return true;
            }
            parent = parent.parentNode;
        }
        return false;
    };

    const getListTop = (viewRect, listRect, bodyRect) => {
        const spacing = 2;

        const top = {
            down: viewRect.top + viewRect.height + spacing,
            up: viewRect.top - listRect.height - spacing
        };

        const ok = {
            down: top.down + listRect.height <= bodyRect.height,
            up: top.up > 0
        };

        //console.log(top, ok);

        if (ok[state.lastDirection]) {
            return top[state.lastDirection];
        }

        if (ok.down) {
            state.lastDirection = 'down';
            return top.down;
        }

        state.lastDirection = 'up';
        return top.up;
    };

    //=========================================================================================================

    const onClick = (e) => {
        open();
    };

    const onInput = (e) => {
        //emit('search', e);
        setSearchValue(e.target.value);
    };

    const onFocus = (e) => {
        //console.log('onFocus', cid);
        openAsync();
    };

    const onBlur = (e) => {
        //console.log('onBlur', cid);
        //data.searchValue = null;
        closeAsync();
    };

    //=========================================================================================================
    const getItemClass = (item) => {
        const ls = ['rui-select-item'];
        if (item.value === selectedValue) {
            ls.push('selected');
        }
        return classMap(ls);
    };

    //=========================================================================================================

    const initSelectedItem = (ls) => {
        const dv = value;

        //console.log('dv', dv);

        const item = ls.find((it) => it.value === dv);
        if (item) {
            setSelectedLabel(item.label);
            setSelectedValue(item.value);
        } else {
            setSelectedLabel('');
            setSelectedValue(null);
        }

    };

    const getListByPropOptions = (ls) => {
        ls = ls.map((item) => {
            if (item && typeof item === 'object') {
                return {
                    ... item,
                    label: item.label || item.value,
                    value: item.value || item.label
                };
            }
            return {
                label: `${item}`,
                value: `${item}`
            };
        });

        initSelectedItem(ls);

        return ls;

    };

    const getListBySlotOptions = (ls) => {
        if (!isList(ls)) {
            return [];
        }

        const getChildrenLabel = (c) => {
            if (typeof c === 'string') {
                return c;
            }
            if (isList(c)) {
                return c.map((vn) => {
                    if (typeof vn === 'string') {
                        return vn;
                    }
                    return getChildrenLabel(vn.props.children);
                }).join('');
            }
            return c || '';
        };

        ls = ls.map((vn) => {
            //console.log(vn);
            const item = {
                ... vn.props
            };
            delete item.children;

            if (!item.label) {
                item.label = getChildrenLabel(vn.props.children);
            }
            if (!item.value) {
                item.value = item.label;
            }
            if (hasOwn(item, 'selected')) {
                item.selected = true;
            }
            if (hasOwn(item, 'removable')) {
                item.removable = true;
            }
            return item;
        });

        initSelectedItem(ls);

        //console.log(ls);

        return ls;

    };

    const list = useMemo(() => {
        if (options) {
            return getListByPropOptions(options);
        }
        return getListBySlotOptions(children);
    }, [options]);


    const initWidth = () => {

        //console.log(cid, 'onListLayout');

        if (viewWidth) {
            return;
        }

        if (!state.$list) {
            return;
        }

        const listRect = state.$list.getBoundingClientRect();

        //console.log(cid, 'listRect', listRect);
        //border is 2 if empty
        if (listRect.width <= 2) {
            return;
        }

        const iconWidth = 15;
        const viewMinWidth = 50;
        const viewMaxWidth = 350;
        //no padding because list have same padding
        const w = clamp(Math.ceil(listRect.width) + iconWidth, viewMinWidth, viewMaxWidth);
        setViewWidth(`${w}px`);

    };


    useEffect(() => {

        if (!state.firstUpdated) {
            state.firstUpdated = true;
            state.$el = el.current;
            state.$view = state.$el.querySelector('.rui-select-view');
            state.$list = state.$el.querySelector('.rui-select-list');
            initWidth();
        }

        layoutAsync();

    });

    return (
        <div className={className} ref={el}>
            {label && <label>{label}</label>}
            <input
                type="text"
                className={viewClass}
                style={viewStyle}
                disabled={disabled}
                readOnly={!searchable}
                value={viewValue}
                onClick={onClick}
                onInput={onInput}
                onFocus={onFocus}
                onBlur={onBlur}
            />

            <div className="rui-select-holder">
                <div className="rui rui-select-list" style={listStyle}>
                    {
                        list.map((item, i) => {
                            return (
                                <div key={i} index={i} className={getItemClass(item)} >
                                    <div className="rui-select-item-label">
                                        { item.label }
                                    </div>
                                    { item.removable && <div className="rui-select-item-remove"><IconX /></div> }
                                </div>
                            );
                        })
                    }
                </div>
            </div>

        </div>
    );

};

RuiSelect.propTypes = {
    label: string,
    disabled: bool,
    options: array,
    width: string,
    searchable: bool,
    value: string,
    model: array,
    onRemove: func,
    children: any
};

export default RuiSelect;
