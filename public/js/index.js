const SearchSystem = {
    init() {
        this.searchInput = document.getElementById('searchInput');
        this.searchButton = document.getElementById('searchButton');

        if (this.searchInput) {
            this.searchInput.addEventListener('input', () => this.toggleSearchButton());
        }
    },

    toggleSearchButton() {
        if (this.searchInput.value.length >= 2) {
            this.searchButton.removeAttribute('hidden');
        } else {
            this.searchButton.setAttribute('hidden', 'true');
        }
    }
};

const MaskSystem = {
    init() {
        this.initPhoneMask();
    },

    initPhoneMask() {
        const phoneInputs = document.querySelectorAll('.phone-mask');

        if (phoneInputs.length) {
            const maskOptions = {
                mask: '+7 (999) 999-99-99',
                placeholder: '+7 (___) ___-__-__',
                showMaskOnHover: true,
                showMaskOnFocus: true
            };

            phoneInputs.forEach(input => {
                Inputmask(maskOptions).mask(input);
            });
        }
    }
};

const CityCreateSystem = {
    init() {
        this.citySearchInput = document.getElementById('city_search_create');
        this.cityIdInput = document.getElementById('city_id_create');
        this.citiesList = document.getElementById('citiesList_create');
        this.cityItems = document.querySelectorAll('.city-item-create');
        this.cityNotFound = document.getElementById('cityNotFound_create');

        if (this.citySearchInput && this.citiesList) {
            this.initCitySearch();
            this.initCitySelection();
            this.initClickOutside();

            this.restoreSelectedCity();
        }
    },

    initCitySearch() {
        let typingTimer;
        const doneTypingInterval = 300;

        this.citySearchInput.addEventListener('focus', () => {
            const searchValue = this.citySearchInput.value.toLowerCase().trim();
            if (searchValue) {
                this.filterCities(searchValue);
                this.citiesList.style.display = 'block';
            }
        });

        this.citySearchInput.addEventListener('input', () => {
            clearTimeout(typingTimer);
            this.cityIdInput.value = '';

            typingTimer = setTimeout(() => {
                const searchValue = this.citySearchInput.value.toLowerCase().trim();
                this.filterCities(searchValue);
                this.citiesList.style.display = searchValue ? 'block' : 'none';
            }, doneTypingInterval);
        });
    },

    filterCities(searchValue) {
        let foundCities = false;

        this.cityItems.forEach(item => {
            const cityName = item.getAttribute('data-city-name').toLowerCase();
            const isVisible = searchValue === '' || cityName.includes(searchValue);
            item.style.display = isVisible ? 'block' : 'none';
            if (isVisible) foundCities = true;
        });

        this.cityNotFound.style.display = searchValue && !foundCities ? 'block' : 'none';
    },

    initCitySelection() {
        this.cityItems.forEach(item => {
            item.addEventListener('click', () => {
                const cityName = item.getAttribute('data-city-name');
                const cityId = item.getAttribute('data-city-id');
                this.selectCity(cityId, cityName);
            });
        });
    },

    selectCity(cityId, cityName) {
        this.citySearchInput.value = cityName;
        this.cityIdInput.value = cityId;
        this.citiesList.style.display = 'none';
        this.cityNotFound.style.display = 'none';
    },

    initClickOutside() {
        document.addEventListener('click', (e) => {
            if (!this.citySearchInput.contains(e.target) &&
                !this.citiesList.contains(e.target)) {
                this.citiesList.style.display = 'none';

                if (!this.citySearchInput.value && this.cityIdInput.value) {
                    this.restoreSelectedCity();
                }
            }
        });
    },

    restoreSelectedCity() {
        const cityId = this.cityIdInput.value;
        if (cityId) {
            const selectedCity = Array.from(this.cityItems)
                .find(item => item.getAttribute('data-city-id') === cityId);

            if (selectedCity) {
                const cityName = selectedCity.getAttribute('data-city-name');
                this.citySearchInput.value = cityName;
                this.citiesList.style.display = 'none';
                this.cityNotFound.style.display = 'none';
            }
        }
    }
};

const CityEditSystem = {
    init() {
        this.citySearchInput = document.getElementById('city_search_edit');
        this.cityIdInput = document.getElementById('city_id_edit');
        this.citiesList = document.getElementById('citiesList_edit');
        this.cityItems = document.querySelectorAll('.city-item-edit');
        this.cityNotFound = document.getElementById('cityNotFound_edit');

        if (this.citySearchInput && this.citiesList) {
            this.initCitySearch();
            this.initCitySelection();
            this.initClickOutside();
            this.restoreSelectedCity();
        }
    },

    initCitySearch() {
        let typingTimer;
        const doneTypingInterval = 300;

        this.citySearchInput.addEventListener('focus', () => {
            const searchValue = this.citySearchInput.value.toLowerCase().trim();
            if (searchValue) {
                this.filterCities(searchValue);
                this.citiesList.style.display = 'block';
            }
        });

        this.citySearchInput.addEventListener('input', () => {
            clearTimeout(typingTimer);
            this.cityIdInput.value = '';

            typingTimer = setTimeout(() => {
                const searchValue = this.citySearchInput.value.toLowerCase().trim();
                this.filterCities(searchValue);
                this.citiesList.style.display = searchValue ? 'block' : 'none';
            }, doneTypingInterval);
        });
    },

    filterCities(searchValue) {
        let foundCities = false;

        this.cityItems.forEach(item => {
            const cityName = item.getAttribute('data-city-name').toLowerCase();
            const isVisible = searchValue === '' || cityName.includes(searchValue);
            item.style.display = isVisible ? 'block' : 'none';
            if (isVisible) foundCities = true;
        });

        this.cityNotFound.style.display = searchValue && !foundCities ? 'block' : 'none';
    },

    initCitySelection() {
        this.cityItems.forEach(item => {
            item.addEventListener('click', () => {
                const cityName = item.getAttribute('data-city-name');
                const cityId = item.getAttribute('data-city-id');
                this.selectCity(cityId, cityName);
            });
        });
    },

    selectCity(cityId, cityName) {
        this.citySearchInput.value = cityName;
        this.cityIdInput.value = cityId;
        this.citiesList.style.display = 'none';
        this.cityNotFound.style.display = 'none';
    },

    initClickOutside() {
        document.addEventListener('click', (e) => {
            if (!this.citySearchInput.contains(e.target) &&
                !this.citiesList.contains(e.target)) {
                this.citiesList.style.display = 'none';

                if (!this.citySearchInput.value && this.cityIdInput.value) {
                    this.restoreSelectedCity();
                }
            }
        });
    },

    restoreSelectedCity() {
        const cityId = this.cityIdInput.value;
        if (cityId) {
            const selectedCity = Array.from(this.cityItems)
                .find(item => item.getAttribute('data-city-id') === cityId);

            if (selectedCity) {
                const cityName = selectedCity.getAttribute('data-city-name');
                this.citySearchInput.value = cityName;
                this.citiesList.style.display = 'none';
                this.cityNotFound.style.display = 'none';
            }
        }
    }
};

const FilterSystem = {
    init() {
        this.initFilterToggle();
        this.initCitySearch();
        this.initCheckboxHandlers();
        this.initFormSubmit();
        this.initResetButton();
        this.showInitialCities();
    },

    initFilterToggle() {
        const filterButton = document.querySelector('.filter-toggle');
        const filterMenu = document.querySelector('.filter-menu');

        filterButton?.addEventListener('click', (e) => {
            e.preventDefault();
            filterMenu.classList.toggle('show');
        });

        // Закрытие при клике вне меню
        document.addEventListener('click', (e) => {
            if (!filterMenu?.contains(e.target) && !filterButton?.contains(e.target)) {
                filterMenu?.classList.remove('show');
            }
        });
    },

    initCitySearch() {
        const citySearchInput = document.querySelector('input[name="city_search"]');
        let typingTimer;
        const doneTypingInterval = 300;

        citySearchInput?.addEventListener('input', function() {
            clearTimeout(typingTimer);
            const searchInput = this;

            typingTimer = setTimeout(() => {
                const searchValue = searchInput.value.toLowerCase().trim();
                FilterSystem.showCities(searchValue);
            }, doneTypingInterval);
        });

        // Предотвращение отправки по Enter
        citySearchInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                FilterSystem.handleEnterPress();
            }
        });
    },

    handleEnterPress() {
        const visibleCities = Array.from(document.querySelectorAll(
            '.city-item:not([style*="display: none"]), .main-city:not([style*="display: none"])'
        ));

        if (visibleCities.length === 1) {
            const checkbox = visibleCities[0].querySelector('input[type="checkbox"]');
            checkbox.checked = true;
            checkbox.dispatchEvent(new Event('change'));
        }
    },

    showCities(searchValue) {
        const allCities = document.getElementById('allCities');
        const cityItems = allCities.querySelectorAll('.city-item');
        const cityNotFound = document.querySelector('#cityNotFound');
        const showSearch = searchValue.length > 0;
        let foundCities = 0;

        cityItems.forEach(item => {
            const label = item.querySelector('.form-check-label');
            if (label) {
                const cityName = label.textContent.toLowerCase().trim();
                const isChecked = item.querySelector('input[type="checkbox"]').checked;

                if (showSearch) {
                    const isVisible = cityName.includes(searchValue);
                    item.style.display = isVisible ? '' : 'none';
                    if (isVisible) foundCities++;
                } else {
                    item.style.display = isChecked ? '' : 'none';
                }
            }
        });

        if (cityNotFound) {
            cityNotFound.style.display = showSearch && foundCities === 0 ? 'block' : 'none';
        }
    },

    initCheckboxHandlers() {
        const citySearchInput = document.querySelector('input[name="city_search"]');
        const cityNotFound = document.querySelector('#cityNotFound');
        const allCities = document.getElementById('allCities');

        if (allCities) {
            allCities.querySelectorAll('.form-check-input').forEach(checkbox => {
                checkbox.addEventListener('change', (e) => {
                    e.stopPropagation();

                    if (checkbox.checked) {
                        citySearchInput.value = '';
                        if (cityNotFound) cityNotFound.style.display = 'none';
                    }
                    this.showCities('');
                });
            });

            allCities.querySelectorAll('.city-item').forEach(cityItem => {
                cityItem.addEventListener('click', (e) => {
                    if (e.target.tagName !== 'INPUT') {
                        const checkbox = cityItem.querySelector('input[type="checkbox"]');
                        if (checkbox) {
                            checkbox.checked = !checkbox.checked;
                            checkbox.dispatchEvent(new Event('change'));
                        }
                    }
                });
            });
        }
    },

    initFormSubmit() {
        const filterForm = document.querySelector('.filter-menu form');

        filterForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            const cleanData = this.getCleanFormData(filterForm);
            const queryString = new URLSearchParams(cleanData).toString();
            window.location.href = filterForm.action + (queryString ? '?' + queryString : '');
        });
    },

    getCleanFormData(form) {
        const formData = new FormData(form);
        const cleanData = new FormData();
        const processedArrays = new Map();

        for (const [key, value] of formData.entries()) {
            if (!value) continue;

            if (key.endsWith('[]')) {
                if (!processedArrays.has(key)) {
                    const uniqueValues = [...new Set(formData.getAll(key))];
                    uniqueValues.forEach(val => cleanData.append(key, val));
                    processedArrays.set(key, true);
                }
                continue;
            }

            cleanData.append(key, value);
        }

        return cleanData;
    },

    initResetButton() {
        const resetButton = document.querySelector('button[type="reset"]');
        const citySearchInput = document.querySelector('input[name="city_search"]');
        const cityNotFound = document.querySelector('#cityNotFound');

        resetButton?.addEventListener('click', () => {
            setTimeout(() => {
                citySearchInput.value = '';
                cityNotFound.style.display = 'none';
                document.querySelectorAll('.form-check-input').forEach(checkbox => {
                    checkbox.checked = false;
                });
                this.showCities('');
                document.querySelector('.filter-menu form').submit();
            }, 100);
        });
    },

    showInitialCities() {
        this.showCities('');
    }
};

const ChildrenSelectionSystem = {
    init() {
        this.selectAllCheckbox = document.getElementById('selectAllCheckbox');
        this.childCheckboxes = document.querySelectorAll('.childCheckbox');
        this.bulkDeleteForm = document.getElementById('bulkDeleteForm');
        this.bulkDeleteButton = document.getElementById('bulkDeleteButton');
        this.selectedIdsContainer = document.getElementById('selectedIdsContainer');

        if (this.selectAllCheckbox && this.childCheckboxes.length) {
            this.initSelectAll();
            this.initIndividualSelections();
            this.initBulkDelete();
        }
    },

    initSelectAll() {
        // Только при клике на верхний чекбокс
        this.selectAllCheckbox.addEventListener('change', () => {
            const isChecked = this.selectAllCheckbox.checked;
            this.childCheckboxes.forEach(checkbox => {
                checkbox.checked = isChecked;
            });
            this.updateBulkDeleteForm();
        });
    },

    initIndividualSelections() {
        // При выборе отдельных чекбоксов НЕ трогаем верхний чекбокс
        this.childCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateBulkDeleteForm();
            });
        });
    },

    updateBulkDeleteForm() {
        const selectedIds = Array.from(this.childCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.dataset.id);

        this.selectedIdsContainer.innerHTML = '';
        selectedIds.forEach(id => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'ids[]';
            input.value = id;
            this.selectedIdsContainer.appendChild(input);
        });

        this.bulkDeleteButton.style.display = selectedIds.length > 0 ? 'block' : 'none';
    },

    initBulkDelete() {
        this.bulkDeleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedIds = this.selectedIdsContainer.querySelectorAll('input[name="ids[]"]');

            if (selectedIds.length === 0) {
                alert('Не выбраны записи для удаления');
                return;
            }

            if (confirm('Вы уверены, что хотите удалить выбранных детей?')) {
                this.bulkDeleteForm.submit();
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    SearchSystem.init();
    MaskSystem.init();
    CityCreateSystem.init();
    CityEditSystem.init();
    ChildrenSelectionSystem.init();

    if (document.querySelector('.filter-menu')) {
        FilterSystem.init();
    }
});


