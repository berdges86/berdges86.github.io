// ==UserScript==
// @name        Brain Rover - Orange Route
// @namespace   Violentmonkey Scripts
// @match       http://brain.rover.sdc.yandex.net/*
// @grant       none
// @version     1.3
// @author      -
// @description Меняет синие маршруты на оранжевые с кнопкой активации
// ==/UserScript==

(function() {
    'use strict';
    
    const targetColor = '#FFA500';
    const checkInterval = 150;
    let isActive = false;

    function createActivationButton() {
        const button = document.createElement('button');
        button.textContent = 'Оранжевый маршрут';
        button.style.position = 'fixed';
        button.style.top = '330px';
        button.style.left = '10px';
        button.style.zIndex = '10000';
        button.style.padding = '8px 12px';
        button.style.backgroundColor = '#FFA500';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.fontWeight = 'bold';
        button.style.fontSize = '12px';
        button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
        
        button.addEventListener('click', () => {
            isActive = !isActive;
            button.textContent = isActive ? 'Выкл' : 'Оранжевый маршрут';
            button.style.backgroundColor = isActive ? '#FF4500' : '#FFA500';
            
            if (isActive) {
                startColorReplacement();
            }
        });
        
        document.body.appendChild(button);
        return button;
    }

    function replaceColor() {
        if (!isActive) return;
        
        document.querySelectorAll('path').forEach(p => {
            if (p.getAttribute('stroke') === '#0077ff' &&
                p.getAttribute('stroke-width') === '4.000' &&
                (p.getAttribute('stroke-opacity') === '1' || !p.hasAttribute('stroke-opacity'))) {
                
                p.setAttribute('stroke', targetColor);
                p.setAttribute('stroke-width', '8');
                
                const parent = p.parentElement;
                if (parent) {
                    parent.style.zIndex = '1000';
                    parent.style.position = 'relative';
                }
            }
        });
        
        if (isActive) {
            setTimeout(replaceColor, checkInterval);
        }
    }

    function startObserver() {
        const observer = new MutationObserver((mutations) => {
            if (!isActive) return;
            
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1 && node.querySelectorAll) {
                        node.querySelectorAll('path').forEach(p => {
                            if (p.getAttribute('stroke') === '#0077ff' &&
                                p.getAttribute('stroke-width') === '4.000' &&
                                (p.getAttribute('stroke-opacity') === '1' || !p.hasAttribute('stroke-opacity'))) {
                                
                                p.setAttribute('stroke', targetColor);
                                p.setAttribute('stroke-width', '8');
                                
                                const parent = p.parentElement;
                                if (parent) {
                                    parent.style.zIndex = '1000';
                                    parent.style.position = 'relative';
                                }
                            }
                        });
                    }
                });
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });
        return observer;
    }

    function startColorReplacement() {
        replaceColor();
    }

    function init() {
        createActivationButton();
        startObserver();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();