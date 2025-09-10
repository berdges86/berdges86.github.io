// ==UserScript==
// @name        Режим указателя для ровера
// @namespace   http://tampermonkey.net/
// @version     1.1
// @description Добавляет кнопку, включающую режим «указателя», рисующего стрелку от центра экрана к иконке ровера на карте.
// @match       http://brain.rover.sdc.yandex.net/*
// @grant       none
// @run-at      document-idle
// ==/UserScript==

(function() {
    'use strict';

    const button = document.createElement('button');
    button.textContent = '📍 Указатель: Вкл';
    
    button.style.position = 'fixed';
    button.style.top = '250px';
    button.style.left = '10px';
    button.style.zIndex = '10000';
    button.style.padding = '12px 20px';
    button.style.fontSize = '14px';
    button.style.fontWeight = 'bold';
    button.style.cursor = 'pointer';
    button.style.border = 'none';
    button.style.borderRadius = '8px';
    button.style.background = 'linear-gradient(45deg, #4F46E5, #6366F1)';
    button.style.color = 'white';
    button.style.boxShadow = '0 2px 8px rgba(79, 70, 229, 0.3)';
    button.style.transition = 'all 0.2s ease';
    
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 12px rgba(79, 70, 229, 0.4)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 8px rgba(79, 70, 229, 0.3)';
    });
    
    document.body.appendChild(button);

    const arrowContainer = document.createElement('div');
    arrowContainer.id = 'pointer-arrow-container';
    arrowContainer.style.position = 'fixed';
    arrowContainer.style.left = '50%';
    arrowContainer.style.top = '50%';
    arrowContainer.style.transformOrigin = 'top left';
    arrowContainer.style.pointerEvents = 'none';
    arrowContainer.style.zIndex = '9999';
    arrowContainer.style.display = 'none';
    document.body.appendChild(arrowContainer);

    const arrowStem = document.createElement('div');
    arrowStem.style.position = 'absolute';
    arrowStem.style.width = '0';
    arrowStem.style.height = '4px';
    arrowStem.style.background = 'linear-gradient(90deg, #8B5CF6, #A78BFA)';
    arrowStem.style.top = '50%';
    arrowStem.style.left = '0';
    arrowStem.style.transform = 'translateY(-50%)';
    arrowStem.style.borderRadius = '2px';
    arrowContainer.appendChild(arrowStem);

    const arrowHead = document.createElement('div');
    arrowHead.style.position = 'absolute';
    arrowHead.style.width = '0';
    arrowHead.style.height = '0';
    arrowHead.style.borderLeft = '12px solid transparent';
    arrowHead.style.borderRight = '12px solid transparent';
    arrowHead.style.borderTop = '24px solid #8B5CF6';
    arrowHead.style.top = '50%';
    arrowHead.style.left = '0';
    arrowHead.style.transform = 'translate(-50%, -50%)';
    arrowContainer.appendChild(arrowHead);

    let pointerOn = false;
    let rafId = null;

    const roverSelector = '.map-rover__icon, .vector-map-rover__icon_icon_arrow, [class*="rover__icon"], .vector-map-rover__icon.vector-map-rover__icon_icon_arrow.vector-map-rover__icon_animated';

    function updateArrow() {
        if (!pointerOn) return;

        const roverEl = document.querySelector(roverSelector);
        if (!roverEl) {
            arrowContainer.style.display = 'none';
        } else {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const rect = roverEl.getBoundingClientRect();
            const roverX = rect.left + rect.width / 2;
            const roverY = rect.top + rect.height / 2;

            const dx = roverX - centerX;
            const dy = roverY - centerY;
            const dist = Math.hypot(dx, dy);

            if (dist < 5) {
                arrowContainer.style.display = 'none';
            } else {
                arrowContainer.style.display = 'block';
                
                const angleDeg = Math.atan2(dy, dx) * 180 / Math.PI;
                
                arrowStem.style.width = dist + 'px';
                
                arrowHead.style.left = dist + 'px';
                
                arrowContainer.style.transform = `translate(-50%, 0) rotate(${angleDeg}deg)`;
            }
        }

        rafId = requestAnimationFrame(updateArrow);
    }

    button.addEventListener('click', () => {
        pointerOn = !pointerOn;
        if (pointerOn) {
            button.textContent = '📍 Указатель: Выкл';
            button.style.background = 'linear-gradient(45deg, #6366F1, #4F46E5)';
            updateArrow();
        } else {
            button.textContent = '📍 Указатель: Вкл';
            button.style.background = 'linear-gradient(45deg, #4F46E5, #6366F1)';
            arrowContainer.style.display = 'none';
            if (rafId) cancelAnimationFrame(rafId);
        }
    });

    window.addEventListener('resize', () => {
        if (pointerOn) {
            if (rafId) cancelAnimationFrame(rafId);
            updateArrow();
        }
    });
})();