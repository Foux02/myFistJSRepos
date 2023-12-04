'use strict';

const title = document.getElementsByTagName('h1')[0];
const screenBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputTypeRange = document.querySelector('.rollback input[type=range]');
const rangeValue = document.querySelector('.rollback .range-value');

const handlerBtnStart = document.getElementsByClassName('handler_btn')[0];
const handlerBtnResert = document.getElementsByClassName('handler_btn')[1];

//const totalInput = [...document.getElementsByClassName('total-input ')];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screenAll = document.querySelectorAll('.screen');

const appData = {
  title: '',
  screens: [],
  countScreensAll: 0,
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  isError: false,

  init: function () {
    console.log('function');

    this.addTitle();

    handlerBtnStart.addEventListener('click', appData.checkStart);
    screenBtn.addEventListener('click', this.addScreenBlock);

    inputTypeRange.addEventListener('input', this.changeRollback);
  },

  checkStart: function () {
    console.log('checkStart');

    screenAll = document.querySelectorAll('.screen');

    screenAll.forEach(function (screen) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      if (+input.value === 0) {
        alert('Не проставленно количество');
        appData.isError = true;
      } else if (selectName === 'Тип экранов') {
        appData.isError = true;
        alert('Не заполнен тип экранов');
      } else {
      }
    });

    if (appData.isError === false) {
      appData.start();
    }
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  changeRollback: function () {
    console.log('changeRollback');

    rangeValue.textContent = `${event.target.value}%`;
    document.rollback = event.target.value;
    appData.rollback = +document.rollback;
  },

  start: function () {
    this.addScreens();
    this.addServices();
    this.addPrices();
    this.showResult();

    this.logger();
  },

  showResult: function () {
    console.log('showResult');

    total.value = this.screenPrice;
    totalCount.value = this.countScreensAll;
    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
  },

  addScreens: function () {
    console.log('addScreens');

    screenAll = document.querySelectorAll('.screen');
    screenAll.forEach(function (screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        count: +input.value,
        price: +select.value * +input.value,
      });
    });
  },

  addServices: function () {
    console.log('addServices');

    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    console.log('addScreenBlock');
    screenAll = document.querySelectorAll('.screen');
    const cloneScreen = screenAll[screenAll.length - 1].cloneNode(true);

    const inputCloneScreen = cloneScreen.querySelector('input[type=text]');
    const selectCloneScreen = cloneScreen.querySelector('select');

    inputCloneScreen.value = '';
    selectCloneScreen.value = '';

    screenAll[screenAll.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    console.log('addPrices');
    this.screenPrice = this.screens.reduce(function (result, num) {
      return result + num.price;
    }, 0);

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }

    for (let countScreen of this.screens) {
      this.countScreensAll += countScreen.count;
    }

    this.fullPrice =
      this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;

    this.servicePercentPrice =
      this.fullPrice - this.fullPrice * (this.rollback / 100);
  },

  logger: function () {
    console.log(this.countScreensAll);
  },
};

appData.init();
