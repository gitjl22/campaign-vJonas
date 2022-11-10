"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 1034:
/*!****************************************!*\
  !*** ./src/app/dice/dice.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiceComponent": () => (/* binding */ DiceComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dice.component.html?ngResource */ 6350);
/* harmony import */ var _dice_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dice.component.css?ngResource */ 8780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_calculations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/calculations.service */ 5291);






let DiceComponent = class DiceComponent {
  constructor(calculationService) {
    this.calculationService = calculationService;
    this.diceRolled = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.canClick = true;
    this.value = 1;
    this.imageValue = 'dice1';
    this.image1 = 'dice1';
    this.image2 = 'dice2';
    this.image3 = 'dice3';
    this.image4 = 'dice4';
    this.image5 = 'dice5';
    this.image6 = 'dice6';
  }

  setImage(num) {
    if (num < 2) {
      this.imageValue = this.image1;
    } else if (num === 2) {
      this.imageValue = this.image2;
    } else if (num === 3) {
      this.imageValue = this.image3;
    } else if (num === 4) {
      this.imageValue = this.image4;
    } else if (num === 5) {
      this.imageValue = this.image5;
    } else {
      this.imageValue = this.image6;
    }
  }

  rollDice() {
    this.value = Math.floor(Math.random() * 6) + 1;
    this.setImage(this.value);
  }

  animatedDiceRoll() {
    var _this = this;

    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.canClick = false;

      _this.rollDice();

      yield new Promise(f => setTimeout(f, 120));

      _this.rollDice();

      yield new Promise(f => setTimeout(f, 120));

      _this.rollDice();

      yield new Promise(f => setTimeout(f, 120));

      _this.rollDice();

      yield new Promise(f => setTimeout(f, 120));

      _this.rollDice();

      yield new Promise(f => setTimeout(f, 120));

      _this.rollDice();

      yield new Promise(f => setTimeout(f, 120));

      _this.rollDice();

      _this.diceRolled.emit(_this.value);

      yield new Promise(f => setTimeout(f, 4000));
      _this.canClick = true;
    })();
  }

};

DiceComponent.ctorParameters = () => [{
  type: _services_calculations_service__WEBPACK_IMPORTED_MODULE_3__.CalculationService
}];

DiceComponent.propDecorators = {
  diceRolled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }]
};
DiceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-dice',
  template: _dice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_dice_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
}), (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], DiceComponent);


/***/ }),

/***/ 5291:
/*!**************************************************!*\
  !*** ./src/app/services/calculations.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculationService": () => (/* binding */ CalculationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);

/* eslint-disable max-len */

let CalculationService = class CalculationService {
    constructor() {
        this.diceValue = 0;
        this.isOver = false;
    }
    setDiceValue(value) {
        this.diceValue = value;
    }
    setDiceRollOver() {
        this.isOver = true;
    }
    getDiceValue() {
        this.isOver = false;
        return this.diceValue;
    }
};
CalculationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], CalculationService);



/***/ }),

/***/ 764:
/*!*******************************************!*\
  !*** ./src/app/services/text.services.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextService": () => (/* binding */ TextService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);

/* eslint-disable max-len */

let TextService = class TextService {
    getCampaignResults() {
        const results = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6'
        ];
        return results;
    }
    getDebateResults() {
        const results = [];
        return results;
    }
    getEvents() {
        const results = [
            {
                title: 'Gaffes',
                description: '',
                rollMap: [-1, -1, -2, -2, -3, -3],
                imageSrc: ''
            },
            {
                title: 'Media Tour',
                description: '',
                rollMap: [-1, -1, 1, 1, 2, 2],
                imageSrc: ''
            },
            {
                title: 'SuperPac',
                description: '',
                rollMap: [-3, -2, -1, 1, 2, 3],
                imageSrc: ''
            },
            {
                title: 'Scandal',
                description: '',
                rollMap: [-1, -2, -3, -4, -5, -6],
                imageSrc: ''
            },
            {
                title: 'Endorsement',
                description: '',
                rollMap: [1, 1, 2, 2, 3, 3],
                imageSrc: ''
            },
            {
                title: 'Hot Button Issue',
                description: '',
                rollMap: [-1, -1, -1, 1, 1, 1],
                imageSrc: ''
            },
            {
                title: 'Debate 1',
                description: '',
                rollMap: [],
                imageSrc: ''
            },
            {
                title: 'Debate 2',
                description: '',
                rollMap: [],
                imageSrc: ''
            },
            {
                title: 'Debate 3',
                description: '',
                rollMap: [],
                imageSrc: ''
            },
        ];
        return results;
    }
    getAdvertisingResults() {
        const results = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6'
        ];
        return results;
    }
    getTurns() {
        const turns = [
            'It is your first turn! Each round you get two turns. Take your turn by clicking on one of the options below. Note that you have to fundraise before you can run ads.',
            'It is your second turn of the round!',
            'It is your first turn of round 2!',
            'It is your second turn of the round!',
            'It is your first turn of the round 3!',
            'It is your second turn of the round. After this turn comes the first presidential debate...',
            'It is your first turn of the round 4!',
            'It is your second turn of the round!',
            'It is your first turn of the round 5!',
            'It is your second turn of the round!',
            'It is your first turn of the round 6!',
            'It is your second turn of the round!  After this turn comes the second presidential debate...',
            'It is your first turn of the round 7!',
            'It is your second turn of the round!',
            'It is your first turn of the round 8!',
            'It is your second turn of the round!',
            'It is your first turn of the round 9!',
            'It is your second turn of the round!  After this turn comes the last presidential debate...',
            'It is your first turn of the last round!',
            'It is your final turn of the game!',
            'Opponent Campaigned',
            'Opponent Ran Ads',
            'Opponent Fundraised'
        ];
        return turns;
    }
    getOpponentActions() {
        const turns = [
            'Your Opponent Ran Fundraising!',
            'Your Opponent campaigned in Florida!  Made a difference of 2 in FL',
            'Your Opponent ran ads in Texas, but they had no effect!',
            'Your Opponent Ran Fundraising!',
            'Your Opponent ran ads in Texas, they made of difference of 2',
            'Your Opponent campaigned in North Carolina.  They made a difference of 3 in NC',
            'Your Opponent Ran Fundraising!',
            'Your Opponent ran ads in WI, IA, MI, OH and made a difference of 1 in those states.',
            'Your Opponent campaigned in Georgia and made a difference of 2 in GA',
            'Your Opponent Ran Fundraising!',
            'Your Opponent ran ads in New Mexico, Colorado, Nevada and Arizona.  Made a difference of 1 in those states.',
            'Your Opponent campaigned in Illinois and made a difference of 2 there',
            'Your Opponent Ran Fundraising!',
            'Your Opponent ran ads in New Mexico, Colorado, Nevada and Arizona, but made no difference!',
            'Your Opponent campaigned in Missouri and made a difference of 1 in that state.',
            'Your Opponent Ran Fundraising!',
            'Your Opponent ran ads in Texas and made a difference of 1 in TX',
            'Your Opponent Ran Fundraising!',
            'Your Opponent campaigned in California, and made a difference of 1 in CA',
            'Your Opponent ran ads in Texas but they made no difference!'
        ];
        return turns;
    }
};
TextService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], TextService);



/***/ }),

/***/ 4763:
/*!*******************************************************!*\
  !*** ./src/app/tab1/advertise/advertise.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvertisePage": () => (/* binding */ AdvertisePage)
/* harmony export */ });
/* harmony import */ var C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _advertise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advertise.component.html?ngResource */ 5969);
/* harmony import */ var _advertise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advertise.component.css?ngResource */ 5442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores/votes.store */ 2049);









let AdvertisePage = class AdvertisePage {
  constructor(router, toastController, votes) {
    this.router = router;
    this.toastController = toastController;
    this.votes = votes;
    this.canBack = true;
    this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      buttonGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl()
    });
  }

  ngOnInit() {
    this.isDemocrat = this.votes.getUserIsDem();
  }

  getGroup() {
    if (this.myGroup.value.buttonGroup === 'one') {
      this.selectedStates = ['HI', 'CA', 'WA', 'OR'];
    } else if (this.myGroup.value.buttonGroup === 'two') {
      this.selectedStates = ['IL', 'MN'];
    } else if (this.myGroup.value.buttonGroup === 'three') {
      this.selectedStates = ['NM', 'CO', 'NV', 'AZ'];
    } else if (this.myGroup.value.buttonGroup === 'four') {
      this.selectedStates = ['ME', 'NH', 'VA', 'PA'];
    } else if (this.myGroup.value.buttonGroup === 'five') {
      this.selectedStates = ['WI', 'IA', 'MI', 'OH'];
    } else if (this.myGroup.value.buttonGroup === 'six') {
      this.selectedStates = ['FL', 'NC', 'GA'];
    } else if (this.myGroup.value.buttonGroup === 'seven') {
      this.selectedStates = ['TX'];
    } else if (this.myGroup.value.buttonGroup === 'eight') {
      this.selectedStates = ['SC', 'MO', 'IN', 'MT', 'MS', 'AK', 'LA'];
    } else {//error
    }
  }

  handleRoll(roll) {
    var _this = this;

    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.canBack = false;

      _this.getGroup();

      console.log(_this.selectedStates);

      if (roll === 1) {
        _this.presentToast('You rolled a ' + roll + ', Your advertising made no difference!', 3000);

        yield new Promise(f => setTimeout(f, 3200));

        _this.toNextTurn();
      } else if (roll < 6) {
        _this.presentToast('You rolled a ' + roll + ', Your advertising made a difference of 1 in your selected states!', 3000);

        for (const state in _this.selectedStates) {
          if (_this.isDemocrat) {
            _this.votes.changeStateClimate(_this.selectedStates[state], 1, 0);
          } else {
            _this.votes.changeStateClimate(_this.selectedStates[state], 0, 1);
          }
        }

        yield new Promise(f => setTimeout(f, 3200));

        _this.toNextTurn();
      } else {
        _this.presentToast('You rolled a ' + roll + ', Your advertising made a difference of 2 in your selected states!', 3000);

        for (const state in _this.selectedStates) {
          if (_this.isDemocrat) {
            _this.votes.changeStateClimate(_this.selectedStates[state], 2, 0);
          } else {
            _this.votes.changeStateClimate(_this.selectedStates[state], 0, 2);
          }
        }

        yield new Promise(f => setTimeout(f, 3200));

        _this.toNextTurn();
      }
    })();
  }

  toNextTurn() {
    this.router.navigateByUrl('/tabs/tab1/opponent');
  }

  back() {
    this.router.navigateByUrl('/tabs/tab1');
  }

  presentToast(message, duration, color = 'primary') {
    var _this2 = this;

    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message,
        duration,
        color,
        position: 'middle',
        mode: 'md'
      });
      toast.present();
    })();
  }

};

AdvertisePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__.VotesStore
}];

AdvertisePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-advertise',
  template: _advertise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_advertise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdvertisePage);


/***/ }),

/***/ 8082:
/*!*****************************************************!*\
  !*** ./src/app/tab1/campaign/campaign.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignPage": () => (/* binding */ CampaignPage)
/* harmony export */ });
/* harmony import */ var C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _campaign_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign.component.html?ngResource */ 1027);
/* harmony import */ var _campaign_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campaign.component.css?ngResource */ 3579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores/votes.store */ 2049);








let CampaignPage = class CampaignPage {
  constructor(router, toastController, votes) {
    this.router = router;
    this.toastController = toastController;
    this.votes = votes;
    this.canBack = true;
  }

  ngOnInit() {
    this.isDemocrat = this.votes.getUserIsDem();
  }

  handleRoll(roll) {
    var _this = this;

    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.canBack = false;

      if (_this.chosenState) {
        if (_this.isDemocrat) {
          //TODO for now, we just take the full roll value...
          _this.votes.changeStateClimate(_this.chosenState, roll, 0);
        } else {
          //TODO for now, we just take the full roll value...
          _this.votes.changeStateClimate(_this.chosenState, 0, roll);
        }

        _this.presentToast('You rolled a ' + roll + ', making a difference of ' + roll + ' in ' + _this.chosenState, 3000); //TODO for now, we just take the full roll value...


        yield new Promise(f => setTimeout(f, 3200));

        _this.toNextTurn();
      } else {
        _this.presentToast('Please select a state', 1000, 'danger');
      }
    })();
  }

  toNextTurn() {
    this.router.navigateByUrl('/tabs/tab1/opponent');
  }

  back() {
    this.router.navigateByUrl('/tabs/tab1');
  }

  presentToast(message, duration, color = 'primary') {
    var _this2 = this;

    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message,
        duration,
        color,
        position: 'middle',
        mode: 'md'
      });
      toast.present();
    })();
  }

};

CampaignPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}, {
  type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__.VotesStore
}];

CampaignPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-campaign',
  template: _campaign_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_campaign_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CampaignPage);


/***/ }),

/***/ 3121:
/*!***********************************************!*\
  !*** ./src/app/tab1/event/event.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventPage": () => (/* binding */ EventPage)
/* harmony export */ });
/* harmony import */ var C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _event_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.component.html?ngResource */ 835);
/* harmony import */ var _event_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.component.css?ngResource */ 7683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_text_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/text.services */ 764);
/* harmony import */ var src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/stores/votes.store */ 2049);




/* eslint-disable max-len */






let EventPage = class EventPage {
  constructor(router, votes, toastController, textService) {
    this.router = router;
    this.votes = votes;
    this.toastController = toastController;
    this.textService = textService;
  } // back() {
  // }


  setNewEvent(debate) {
    this.textService.getEvents();

    if (debate) {//setNew Event to be a debate...
    } else {//pick an event at random... need some input as to how to choose which event we want next.
    }
  }

  handleRoll(roll) {
    var _this = this;

    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (roll <= 3) {
        _this.votes.changeNationalClimate(roll / 2, -roll / 2);

        _this.presentToast('National Climate moved ' + roll + ' to the left', 2000);
      } else {
        _this.votes.changeNationalClimate(-(roll - 3) / 2, (roll - 3) / 2);

        _this.presentToast('National Climate moved ' + (roll - 3) + ' to the right', 2000);
      }

      yield new Promise(f => setTimeout(f, 2200));

      _this.endEvent();
    })();
  }

  presentToast(message, duration, color = 'primary') {
    var _this2 = this;

    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message,
        duration,
        color,
        position: 'middle',
        mode: 'md'
      });
      toast.present();
    })();
  }

  endEvent() {
    this.router.navigateByUrl('/tabs/tab1');
  }

};

EventPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_4__.VotesStore
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: src_app_services_text_services__WEBPACK_IMPORTED_MODULE_3__.TextService
}];

EventPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-event',
  template: _event_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_event_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EventPage);


/***/ }),

/***/ 3067:
/*!*******************************************************!*\
  !*** ./src/app/tab1/fundraise/fundraise.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundraisePage": () => (/* binding */ FundraisePage)
/* harmony export */ });
/* harmony import */ var C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _fundraise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fundraise.component.html?ngResource */ 1304);
/* harmony import */ var _fundraise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fundraise.component.css?ngResource */ 3899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/stores/votes.store */ 2049);








let FundraisePage = class FundraisePage {
  constructor(router, toastController, votes) {
    this.router = router;
    this.toastController = toastController;
    this.votes = votes;
    this.canBack = true;
  }

  handleRoll(rollValue) {
    var _this = this;

    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.canBack = false;

      if (rollValue <= 4) {
        _this.votes.funds++;

        _this.presentToast('You rolled a ' + rollValue + ', raising enough to run 1 ad campaign', 2900);
      } else {
        _this.votes.funds += 2;

        _this.presentToast('You rolled a ' + rollValue + ', raising enough to run 2 ad campaigns', 2900);
      }

      yield new Promise(f => setTimeout(f, 3000));

      _this.toNextTurn();
    })();
  }

  toNextTurn() {
    this.router.navigateByUrl('/tabs/tab1/opponent');
  }

  back() {
    this.router.navigateByUrl('/tabs/tab1');
  }

  presentToast(message, duration, color = 'primary') {
    var _this2 = this;

    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message,
        duration,
        color,
        position: 'middle',
        mode: 'md'
      });
      toast.present();
    })();
  }

};

FundraisePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}, {
  type: src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_3__.VotesStore
}];

FundraisePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-fundraise',
  template: _fundraise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_fundraise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], FundraisePage);


/***/ }),

/***/ 1353:
/*!*****************************************************!*\
  !*** ./src/app/tab1/opponent/opponent.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpponentPage": () => (/* binding */ OpponentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _opponent_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opponent.component.html?ngResource */ 3409);
/* harmony import */ var _opponent_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opponent.component.css?ngResource */ 3142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_text_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/text.services */ 764);
/* harmony import */ var src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/stores/votes.store */ 2049);



/* eslint-disable max-len */





let OpponentPage = class OpponentPage {
    constructor(router, toastController, votes, textService) {
        this.router = router;
        this.toastController = toastController;
        this.votes = votes;
        this.textService = textService;
    }
    ngOnInit() {
        this.getAllActions();
    }
    getAllActions() {
        this.allActions = this.textService.getOpponentActions();
    }
    getNextOpponentAction() {
        return this.allActions[this.votes.turn];
    }
    goToResults() {
        this.router.navigateByUrl('/tabs/tab1/results');
    }
    goToTab1() {
        this.router.navigateByUrl('tabs/tab1');
    }
    goToEvent() {
        this.router.navigateByUrl('/tabs/tab1/event');
    }
    goToDebate() {
        this.router.navigateByUrl('/tabs/tab1/debate');
    }
    nextEvent() {
        this.dummyAI();
        this.votes.turn++;
        if (this.votes.turn % 2 === 0) {
            this.votes.round++;
            if (this.votes.round > 10) {
                this.goToResults();
            }
            else if (this.votes.round === 4 || this.votes.round === 7 || this.votes.round === 10) {
                this.goToDebate();
            }
            else {
                this.goToEvent();
            }
        }
        else {
            this.goToTab1();
        }
    }
    dummyAI() {
        if (this.votes.turn === 1) {
            if (this.votes.getUserIsDem()) {
                this.votes.changeStateClimate('FL', 0, 2);
            }
            else {
                this.votes.changeStateClimate('FL', 2, 0);
            }
            //fl+2
        }
        else if (this.votes.turn === 4) {
            if (this.votes.getUserIsDem()) {
                this.votes.changeStateClimate('TX', 0, 2);
            }
            else {
                this.votes.changeStateClimate('TX', 2, 0);
            }
            //tx+2
        }
        else if (this.votes.turn === 5) {
            if (this.votes.getUserIsDem()) {
                this.votes.changeStateClimate('NC', 0, 3);
            }
            else {
                this.votes.changeStateClimate('NC', 3, 0);
            }
        }
        else if (this.votes.turn === 7) {
            if (this.votes.getUserIsDem()) {
                this.votes.changeStateClimate('WI', 0, 1);
                this.votes.changeStateClimate('IA', 0, 0);
                this.votes.changeStateClimate('MI', 0, 1);
                this.votes.changeStateClimate('OH', 0, 1);
            }
            else {
                this.votes.changeStateClimate('WI', 1, 0);
                this.votes.changeStateClimate('IA', 1, 0);
                this.votes.changeStateClimate('MI', 1, 0);
                this.votes.changeStateClimate('OH', 1, 0);
            }
            //wi,ia,mi,oh 1
        }
        else if (this.votes.turn === 8) {
            if (this.votes.getUserIsDem()) {
                this.votes.changeStateClimate('GA', 0, 2);
            }
            else {
                this.votes.changeStateClimate('GA', 2, 0);
            }
            //ga 2
        }
        else if (this.votes.turn === 10) {
            if (this.votes.getUserIsDem()) {
                this.votes.changeStateClimate('NM', 0, 1);
                this.votes.changeStateClimate('CO', 0, 1);
                this.votes.changeStateClimate('NV', 0, 1);
                this.votes.changeStateClimate('AZ', 0, 1);
            }
            else {
                this.votes.changeStateClimate('NM', 1, 0);
                this.votes.changeStateClimate('CO', 1, 0);
                this.votes.changeStateClimate('NV', 1, 0);
                this.votes.changeStateClimate('AZ', 1, 0);
            }
            //nm, co nv az 1
        }
        else if (this.votes.turn === 11) {
            if (this.votes.getUserIsDem()) {
                this.votes.changeStateClimate('IL', 0, 2);
            }
            else {
                this.votes.changeStateClimate('IL', 2, 0);
            }
            //il 2
        }
        else if (this.votes.turn === 14) {
            if (this.votes.getUserIsDem()) {
                this.votes.changeStateClimate('MO', 0, 1);
            }
            else {
                this.votes.changeStateClimate('MO', 1, 0);
            }
            //mo 1
        }
        else if (this.votes.turn === 16) {
            if (this.votes.getUserIsDem()) {
                this.votes.changeStateClimate('TX', 0, 1);
            }
            else {
                this.votes.changeStateClimate('TX', 1, 0);
            }
            //tx 1
        }
        else if (this.votes.turn === 18) {
            if (this.votes.getUserIsDem()) {
                this.votes.changeStateClimate('CA', 0, 1);
            }
            else {
                this.votes.changeStateClimate('CA', 1, 0);
            }
            //ca 1
        }
    }
};
OpponentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_3__.VotesStore },
    { type: src_app_services_text_services__WEBPACK_IMPORTED_MODULE_2__.TextService }
];
OpponentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-opponent',
        template: _opponent_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_opponent_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OpponentPage);



/***/ }),

/***/ 5686:
/*!***************************************************!*\
  !*** ./src/app/tab1/results/results.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsPage": () => (/* binding */ ResultsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _results_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./results.component.html?ngResource */ 9186);
/* harmony import */ var _results_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results.component.css?ngResource */ 6176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_text_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/text.services */ 764);
/* harmony import */ var src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/stores/votes.store */ 2049);



/* eslint-disable max-len */





let ResultsPage = class ResultsPage {
    constructor(router, toastController, votes, textService) {
        this.router = router;
        this.toastController = toastController;
        this.votes = votes;
        this.textService = textService;
    }
    mainMenu() {
        this.router.navigateByUrl('/');
    }
};
ResultsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_3__.VotesStore },
    { type: src_app_services_text_services__WEBPACK_IMPORTED_MODULE_2__.TextService }
];
ResultsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-results',
        template: _results_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_results_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResultsPage);



/***/ }),

/***/ 8271:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _advertise_advertise_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advertise/advertise.component */ 4763);
/* harmony import */ var _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign/campaign.component */ 8082);
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event/event.component */ 3121);
/* harmony import */ var _fundraise_fundraise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fundraise/fundraise.component */ 3067);
/* harmony import */ var _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./opponent/opponent.component */ 1353);
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./results/results.component */ 5686);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ 6923);










const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__.Tab1Page,
    },
    {
        path: 'campaign',
        component: _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_1__.CampaignPage,
    },
    {
        path: 'opponent',
        component: _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_4__.OpponentPage,
    },
    {
        path: 'results',
        component: _results_results_component__WEBPACK_IMPORTED_MODULE_5__.ResultsPage,
    },
    {
        path: 'debate',
        component: _event_event_component__WEBPACK_IMPORTED_MODULE_2__.EventPage,
    },
    {
        path: 'fundraise',
        component: _fundraise_fundraise_component__WEBPACK_IMPORTED_MODULE_3__.FundraisePage,
    },
    {
        path: 'advertise',
        component: _advertise_advertise_component__WEBPACK_IMPORTED_MODULE_0__.AdvertisePage,
    },
    {
        path: 'event',
        component: _event_event_component__WEBPACK_IMPORTED_MODULE_2__.EventPage,
    },
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 8271);
/* harmony import */ var _fundraise_fundraise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fundraise/fundraise.component */ 3067);
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event/event.component */ 3121);
/* harmony import */ var _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./campaign/campaign.component */ 8082);
/* harmony import */ var _advertise_advertise_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advertise/advertise.component */ 4763);
/* harmony import */ var _dice_dice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dice/dice.component */ 1034);
/* harmony import */ var _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./opponent/opponent.component */ 1353);
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./results/results.component */ 5686);















let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page, _fundraise_fundraise_component__WEBPACK_IMPORTED_MODULE_3__.FundraisePage, _event_event_component__WEBPACK_IMPORTED_MODULE_4__.EventPage, _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_5__.CampaignPage, _advertise_advertise_component__WEBPACK_IMPORTED_MODULE_6__.AdvertisePage, _dice_dice_component__WEBPACK_IMPORTED_MODULE_7__.DiceComponent, _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_8__.OpponentPage, _results_results_component__WEBPACK_IMPORTED_MODULE_9__.ResultsPage]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.css?ngResource */ 4223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_text_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/text.services */ 764);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stores/votes.store */ 2049);
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/audio.service */ 6425);










let Tab1Page = class Tab1Page {
  constructor(audio, route, textService, toastController, votes) {
    this.audio = audio;
    this.route = route;
    this.textService = textService;
    this.toastController = toastController;
    this.votes = votes;
    this.text = '';
    this.funds = 0;
  }

  ngOnInit() {
    this.turns = this.textService.getTurns();
    this.currentTurn = this.turns[0]; //NEEDS TO BE UPDATED

    this.isDemocrat = this.votes.getUserIsDem();
  }

  ngAfterViewInit() {
    this.audio.preload('a3', 'assets/audio/vote.mp3');
    this.audio.preload('a5', 'assets/audio/thats-america.mp3');
    this.audio.preload('a6', 'assets/audio/dont-boo-vote.mp3');
    this.audio.preload('a8', 'assets/audio/america.mp3');
    this.audio.preload('a2', 'assets/audio/i-said-no.mp3');
    this.audio.preload('a0', 'assets/audio/thank-you-and-good-evening.mp3');
    this.audio.preload('a1', 'assets/audio/bad-news.mp3');
    this.audio.preload('a4', 'assets/audio/come-on-man.mp3');
    this.audio.preload('a7', 'assets/audio/congratulations.mp3');
  }

  getCurrentTurn() {
    return this.turns[this.votes.turn];
  }

  fundraise() {
    this.audio.play('a8');
    this.takeTurn();
    this.route.navigateByUrl('tabs/tab1/fundraise');
  }

  campaign() {
    this.audio.play('a3');
    this.takeTurn();
    this.route.navigateByUrl('tabs/tab1/campaign');
  }

  advertising() {
    this.audio.play('a5');

    if (this.votes.funds > 0) {
      this.votes.funds--;
      this.takeTurn();
      this.route.navigateByUrl('tabs/tab1/advertise');
    } else {
      this.presentToast('You need to fundraise before you can spend on advertising!', 3000, 'danger');
    }
  }

  takeTurn() {// const i = Math.floor(Math.random() * 9);
    // this.audio.play('a'+i);
  }

  presentToast(message, duration, color = 'primary') {
    var _this = this;

    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.audio.play('a1');

      const toast = yield _this.toastController.create({
        message,
        duration,
        color,
        position: 'middle',
        mode: 'md'
      });
      toast.present();
    })();
  }

};

Tab1Page.ctorParameters = () => [{
  type: _services_audio_service__WEBPACK_IMPORTED_MODULE_5__.AudioService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _services_text_services__WEBPACK_IMPORTED_MODULE_3__.TextService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}, {
  type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_4__.VotesStore
}];

Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-tab1',
  template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab1_page_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab1Page);


/***/ }),

/***/ 8780:
/*!****************************************************!*\
  !*** ./src/app/dice/dice.component.css?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".dice {\r\n  max-width: 40px;\r\n}\r\n\r\n.center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CO0FBQ0YiLCJmaWxlIjoiZGljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpY2Uge1xyXG4gIG1heC13aWR0aDogNDBweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxlZnQ6IDUwJVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 5442:
/*!*******************************************************************!*\
  !*** ./src/app/tab1/advertise/advertise.component.css?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "input[type='radio'][name='buttonGroup'] { display:none; }\r\nlabel {\r\n  display:inline-block;\r\n  padding:3px;\r\n  border:1px solid #000000;\r\n  border-radius:3px;\r\n  background-color:rgb(245, 245, 245);\r\n  width:10em;\r\n  text-align:center;\r\n}\r\ninput[type='radio'][name='buttonGroup']:checked + label { background-color:#bbbbbb; }\r\n.column {\r\n  float: left;\r\n  padding: 10px;\r\n  height: 300px; /* Should be removed. Only for demonstration */\r\n}\r\n.left {\r\n  width: 50%;\r\n}\r\n.right {\r\n  width: 50%;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n.state-icon {\r\n  max-height: 25px;\r\n}\r\nion-content{\r\n  --background: #fff url('advertise.png') no-repeat center center / cover;\r\n}\r\n.center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmVydGlzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQyxZQUFZLEVBQUU7QUFDeEQ7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFDQSwwREFBMEQsd0JBQXdCLEVBQUU7QUFFcEY7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWEsRUFBRSw4Q0FBOEM7QUFDL0Q7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsdUVBQThGO0FBQ2hHO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CO0FBQ0YiLCJmaWxlIjoiYWR2ZXJ0aXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPSdyYWRpbyddW25hbWU9J2J1dHRvbkdyb3VwJ10geyBkaXNwbGF5Om5vbmU7IH1cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6M3B4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgIzAwMDAwMDtcclxuICBib3JkZXItcmFkaXVzOjNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDUsIDI0NSwgMjQ1KTtcclxuICB3aWR0aDoxMGVtO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbmlucHV0W3R5cGU9J3JhZGlvJ11bbmFtZT0nYnV0dG9uR3JvdXAnXTpjaGVja2VkICsgbGFiZWwgeyBiYWNrZ3JvdW5kLWNvbG9yOiNiYmJiYmI7IH1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDsgLyogU2hvdWxkIGJlIHJlbW92ZWQuIE9ubHkgZm9yIGRlbW9uc3RyYXRpb24gKi9cclxufVxyXG5cclxuLmxlZnQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbi5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5zdGF0ZS1pY29uIHtcclxuICBtYXgtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hZHZlcnRpc2UucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiA1MCVcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3579:
/*!*****************************************************************!*\
  !*** ./src/app/tab1/campaign/campaign.component.css?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-content{\r\n  --background: #fff url('rally.png') no-repeat center center / cover;\r\n}\r\n/*\r\np {\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  color: #000;\r\n} */\r\n/* h1 {\r\n  color: #000;\r\n  text-shadow: 1px 0 0 #fff, 0 -1px 0 #fff, 0 1px 0 #fff, -1px 0 0 #fff;\r\n}\r\n\r\nh3 {\r\n  color: #000;\r\n  text-shadow: 1px 0 0 #fff, 0 -1px 0 #fff, 0 1px 0 #fff, -1px 0 0 #fff;\r\n} */\r\n.center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbXBhaWduLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtRUFBMEY7QUFDNUY7QUFDQTs7OztHQUlHO0FBRUg7Ozs7Ozs7O0dBUUc7QUFFSDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkI7QUFDRiIsImZpbGUiOiJjYW1wYWlnbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmFsbHkucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuLypcclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59ICovXHJcblxyXG4vKiBoMSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAwIDAgI2ZmZiwgMCAtMXB4IDAgI2ZmZiwgMCAxcHggMCAjZmZmLCAtMXB4IDAgMCAjZmZmO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAwIDAgI2ZmZiwgMCAtMXB4IDAgI2ZmZiwgMCAxcHggMCAjZmZmLCAtMXB4IDAgMCAjZmZmO1xyXG59ICovXHJcblxyXG4uY2VudGVyIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGVmdDogNTAlXHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 7683:
/*!***********************************************************!*\
  !*** ./src/app/tab1/event/event.component.css?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "ion-content{\r\n  --background: #fff url('debate.png') no-repeat center center / cover;\r\n}\r\n\r\n.center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvRUFBMkY7QUFDN0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CO0FBQ0YiLCJmaWxlIjoiZXZlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2RlYmF0ZS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxlZnQ6IDUwJVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3899:
/*!*******************************************************************!*\
  !*** ./src/app/tab1/fundraise/fundraise.component.css?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-content{\r\n  --background: #fff url('fundraise.png') no-repeat center center / cover;\r\n}\r\n\r\n.center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmRyYWlzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUVBQThGO0FBQ2hHOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtBQUNGIiwiZmlsZSI6ImZ1bmRyYWlzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZnVuZHJhaXNlLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGVmdDogNTAlXHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3142:
/*!*****************************************************************!*\
  !*** ./src/app/tab1/opponent/opponent.component.css?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-content{\r\n  --background: #fff url('opponent.png') no-repeat center center / cover;\r\n}\r\n\r\n\r\n.center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzRUFBNkY7QUFDL0Y7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtBQUNGIiwiZmlsZSI6Im9wcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vcHBvbmVudC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxufVxyXG5cclxuXHJcbi5jZW50ZXIge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiA1MCVcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 6176:
/*!***************************************************************!*\
  !*** ./src/app/tab1/results/results.component.css?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-content{\r\n  --background: #fff url('results.png') no-repeat center center / cover;\r\n}\r\n\r\n.center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFFQUE0RjtBQUM5Rjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkI7QUFDRiIsImZpbGUiOiJyZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9yZXN1bHRzLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGVmdDogNTAlXHJcbn1cclxuIl19 */";

/***/ }),

/***/ 4223:
/*!***********************************************!*\
  !*** ./src/app/tab1/tab1.page.css?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = ".option {\r\n  height: 100px;\r\n  position: relative;\r\n  left: 10%;\r\n  width: 80%;\r\n  right: 10%;\r\n}\r\n\r\n\r\nion-content{\r\n  --background: #fff url('boardroom.png') no-repeat center center / cover;\r\n}\r\n\r\n\r\n.header-icon {\r\n  position: fixed;\r\n  right: 10px;\r\n  max-height: 30px;\r\n}\r\n\r\n\r\n.center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtBQUNaOzs7QUFHQTtFQUNFLHVFQUEyRjtBQUM3Rjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CO0FBQ0YiLCJmaWxlIjoidGFiMS5wYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb24ge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDEwJTtcclxuICB3aWR0aDogODAlO1xyXG4gIHJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ib2FyZHJvb20ucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaWNvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiA1MCVcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 6350:
/*!*****************************************************!*\
  !*** ./src/app/dice/dice.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<div class=\"center\">\r\n  <img class=\"dice\" src='assets/{{imageValue}}.png'>\r\n  <ion-button [disabled]=\"!canClick\" (click)=\"animatedDiceRoll()\">Roll</ion-button>\r\n</div>\r\n";

/***/ }),

/***/ 5969:
/*!********************************************************************!*\
  !*** ./src/app/tab1/advertise/advertise.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\r\n<div class=\"center\">\r\n<h1>Advertise</h1>\r\n</div>\r\n<div class=\"center\">\r\n<h3>Choose a block of states to advertise to:</h3>\r\n</div>\r\n\r\n<!-- Have an icon for each of the state blocks -->\r\n<div class=\"row\">\r\n  <div [formGroup]=\"myGroup\">\r\n    <div class=\"column left\">\r\n    <input type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"one\" id=\"one\"><label for=\"one\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/HI-Hawaii.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/CA-California.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/WA-Washington.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/OR-Oregon.png\">\r\n      <br>\r\n      Block 1 (HI, CA, WA, OR)</label>\r\n    <input type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"two\" id=\"two\"><label for=\"two\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/IL-Illinois.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/MN-Minnesota.png\">\r\n      <br>\r\n      Block 2 (IL, MN)</label>\r\n    <input type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"three\" id=\"three\"><label for=\"three\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/NM-New-Mexico.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/CO-Colorado.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/NV-Nevada.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/AZ-Arizona.png\">\r\n      <br>\r\n      Block 3 (NM, CO, NV, AZ)</label>\r\n    <input type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"four\" id=\"four\"><label for=\"four\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/ME-Maine.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/NH-New-Hampshire.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/VA-Virginia.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/PA-Pennsylvania.png\">\r\n      <br>\r\n      Block 4 (ME, NH, VA, PA)</label>\r\n  </div>\r\n  <div class=\"column right\">\r\n    <input type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"five\" id=\"five\"><label for=\"five\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/WI-Wisconsin.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/IA-Iowa.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/MI-Michigan.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/OH-Ohio.png\">\r\n      <br>\r\n      Block 5 (WI, IA, MI, OH)</label>\r\n    <input type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"six\" id=\"six\"><label for=\"six\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/FL-Florida.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/NC-North-Carolina.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/GA-Georgia.png\">\r\n      <br>\r\n      Block 6 (FL, NC, GA)</label>\r\n    <input type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"seven\" id=\"seven\"><label for=\"seven\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/TX-Texas.png\">\r\n      <br>\r\n      Block 7 (TX)</label>\r\n    <input type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"eight\" id=\"eight\"><label for=\"eight\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/SC-South-Carolina.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/MO-Missouri.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/IN-Indiana.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/MT-Montana.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/MS-Mississippi.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/AK-Alaska.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/LA-Louisiana.png\">\r\n      <br>\r\n      Block 8 (SC, MO, IN, MT, MS, AK, LA)</label>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"center\">\r\n<p>After choosing which block you will advertise to, click 'roll' to see how the area is affected.</p>\r\n</div>\r\n<div class=\"center\">\r\n<app-dice (diceRolled)=\"handleRoll($event)\"></app-dice>\r\n</div>\r\n<div class=\"center\">\r\n<p>Rolling a 1 will result in no effect<br>\r\nRolling a 2,3,4 or 5 will result in a +1<br>\r\nRolling a 6 will result in a +2<br></p>\r\n</div>\r\n<div class=\"center\">\r\n<ion-button [disabled]=\"!canBack\" (click)=\"back()\">Back To Options</ion-button>\r\n</div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 1027:
/*!******************************************************************!*\
  !*** ./src/app/tab1/campaign/campaign.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\r\n  <div class=\"center\">\r\n  <h1>Campaign in a specific state</h1>\r\n  </div>\r\n  <div class=\"center\">\r\n  <h3>Look at the stats page to decide which state you want to focus your campaign on!</h3>\r\n  </div>\r\n  <div class=\"center\">\r\n  <p><strong>Your campaigning is less effective the further the state is from your political stances</strong></p>\r\n  </div>\r\n  <div class=\"center\">\r\n  <p>Example:</p>\r\n  <p>A republican campaigning in a (+2 Dem) will subtract 2 from their roll.</p>\r\n  <p>A democrat campaigning in a (+2 Dem) will add 2 to their roll.</p>\r\n  </div>\r\n\r\n\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-select [(ngModel)]=\"chosenState\" placeholder=\"Choose a state:\">\r\n        <ion-select-option value=\"AL\">Alabama (+2 Rep)</ion-select-option>\r\n        <ion-select-option value=\"AK\">Alaska (+1 Rep)</ion-select-option>\r\n        <ion-select-option value=\"AZ\">Arizona</ion-select-option>\r\n        <ion-select-option value=\"AR\">Arkansas (+2 Rep)</ion-select-option>\r\n        <ion-select-option value=\"CA\">California (+1 Dem)</ion-select-option>\r\n        <ion-select-option value=\"CO\">Colorado</ion-select-option>\r\n        <ion-select-option value=\"CT\">Connecticut (+2 Dem)</ion-select-option>\r\n        <ion-select-option value=\"DE\">Delaware (+2 Dem)</ion-select-option>\r\n        <ion-select-option value=\"DC\">D.C. (+2 Dem)</ion-select-option>\r\n        <ion-select-option value=\"FL\">Florida</ion-select-option>\r\n        <ion-select-option value=\"GA\">Georgia</ion-select-option>\r\n        <ion-select-option value=\"HI\">Hawaii (+1 Dem)</ion-select-option>\r\n        <ion-select-option value=\"ID\">Idaho (+2 Rep)</ion-select-option>\r\n        <ion-select-option value=\"IL\">Illinois (+1 Dem)</ion-select-option>\r\n        <ion-select-option value=\"IN\">Indiana (+1 Rep)</ion-select-option>\r\n        <ion-select-option value=\"IA\">Iowa</ion-select-option>\r\n        <ion-select-option value=\"KS\">Kansas (+2 Rep)</ion-select-option>\r\n        <ion-select-option value=\"KY\">Kentucky (+2 Rep)</ion-select-option>\r\n        <ion-select-option value=\"LA\">Louisiana (+1 Rep)</ion-select-option>\r\n        <ion-select-option value=\"ME\">Maine</ion-select-option>\r\n        <ion-select-option value=\"MD\">Maryland (+2 Dem)</ion-select-option>\r\n        <ion-select-option value=\"MA\">Massachusetts (+2 Dem)</ion-select-option>\r\n        <ion-select-option value=\"MI\">Michigan</ion-select-option>\r\n        <ion-select-option value=\"MN\">Minnesota (+1 Dem)</ion-select-option>\r\n        <ion-select-option value=\"MS\">Mississippi (+1 Rep)</ion-select-option>\r\n        <ion-select-option value=\"MO\">Missouri (+1 Rep)</ion-select-option>\r\n        <ion-select-option value=\"MT\">Montana (+1 Rep)</ion-select-option>\r\n        <ion-select-option value=\"NE\">Nebraska (+2 Rep)</ion-select-option>\r\n        <ion-select-option value=\"NV\">Nevada</ion-select-option>\r\n        <ion-select-option value=\"NH\">New Hampshire</ion-select-option>\r\n        <ion-select-option value=\"NJ\">New Jersey (+2 Dem)</ion-select-option>\r\n        <ion-select-option value=\"NM\">New Mexico</ion-select-option>\r\n        <ion-select-option value=\"NY\">New York (+2 Dem)</ion-select-option>\r\n        <ion-select-option value=\"NC\">North Carolina</ion-select-option>\r\n        <ion-select-option value=\"ND\">North Dakota (+2 Rep)</ion-select-option>\r\n        <ion-select-option value=\"OH\">Ohio</ion-select-option>\r\n        <ion-select-option value=\"OK\">Oklahoma (+2 Rep)</ion-select-option>\r\n        <ion-select-option value=\"OR\">Oregon (+1 Dem)</ion-select-option>\r\n        <ion-select-option value=\"PA\">Pennsylvania</ion-select-option>\r\n        <ion-select-option value=\"RI\">Rhode Island (+2 Dem)</ion-select-option>\r\n        <ion-select-option value=\"SC\">South Carolina (+1 Rep)</ion-select-option>\r\n        <ion-select-option value=\"SD\">South Dakota (+2 Rep)</ion-select-option>\r\n        <ion-select-option value=\"TN\">Tennessee (+2 Rep)</ion-select-option>\r\n        <ion-select-option value=\"TX\">Texas (+1 Rep)</ion-select-option>\r\n        <ion-select-option value=\"UT\">Utah (+2 Rep)</ion-select-option>\r\n        <ion-select-option value=\"VT\">Vermont (+2 Dem)</ion-select-option>\r\n        <ion-select-option value=\"VI\">Virginia</ion-select-option>\r\n        <ion-select-option value=\"WA\">Washington (+1 Dem)</ion-select-option>\r\n        <ion-select-option value=\"WV\">West Virginia (+2 Rep)</ion-select-option>\r\n        <ion-select-option value=\"WI\">Wisconsin</ion-select-option>\r\n        <ion-select-option value=\"WY\">Wyoming (+2 Rep)</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-list>\r\n  <div class=\"center\">\r\n    <app-dice (diceRolled)=\"handleRoll($event)\"></app-dice>\r\n  </div>\r\n  <div class=\"center\">\r\n\r\n  <ion-button [disabled]=\"!canBack\"(click)=\"back()\">Back To Options</ion-button>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 835:
/*!************************************************************!*\
  !*** ./src/app/tab1/event/event.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\r\n\r\n\r\n<div class=\"center\">\r\n<h1>Special Event has been triggered!</h1>\r\n</div>\r\n<div class=\"center\">\r\n<!-- <p>Before rounds 4,7,10 there will be a debate!  It has rolling rules that effect national climate<br></p> -->\r\n<p>Debates, Gaffes, scandals, media tour, endorsements, SuperPacs will appear here</p>\r\n</div>\r\n<div class=\"center\">\r\n<h1>Since this feature is unfinished, just roll the dice to effect the national climate.</h1>\r\n</div>\r\n<div class=\"center\">\r\n<p>1,2,3 will move the national climate to the left</p>\r\n<p>4,5,6 will move the national climate to the right</p>\r\n</div>\r\n<div class=\"center\">\r\n\r\n<app-dice (diceRolled)=\"handleRoll($event)\"></app-dice>\r\n</div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 1304:
/*!********************************************************************!*\
  !*** ./src/app/tab1/fundraise/fundraise.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\r\n\r\n<div class=\"center\">\r\n  <h3>Fundraising</h3>\r\n</div>\r\n<div class=\"center\">\r\n<p>You can’t win without money. To run ads, you’ll need some money. If you roll a 1-4, you’ll receive one fundraising point. If you roll a 5 or 6, you’ll receive two fundraising points (way to grovel). Two fundraising points are worth 10,000 Stanley nickels.</p>\r\n</div>\r\n<div class=\"center\">\r\n<app-dice (diceRolled)=\"handleRoll($event)\"></app-dice>\r\n</div>\r\n<div class=\"center\">\r\n<ion-button [disabled]=\"!canBack\" (click)=\"back()\">Back To Options</ion-button>\r\n</div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 3409:
/*!******************************************************************!*\
  !*** ./src/app/tab1/opponent/opponent.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\r\n  <div class=\"center\">\r\n    <h1>THIS IS WHAT YOUR OPPONENT DID:</h1>\r\n  </div>\r\n  <div class=\"center\">\r\n    <h2>{{getNextOpponentAction()}}</h2>\r\n  </div>\r\n  <div class=\"center\">\r\n    <ion-button (click)=\"nextEvent()\">Continue</ion-button>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 9186:
/*!****************************************************************!*\
  !*** ./src/app/tab1/results/results.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\r\n\r\n<div class=\"center\">\r\n<h1><strong>GAME OVER</strong></h1>\r\n</div>\r\n<div class=\"center\">\r\n<p>Final Score:</p>\r\n<p>Republican: {{votes.getFinalRed()}}</p>\r\n<p>Democrat: {{votes.getFinalBlue()}}</p>\r\n</div>\r\n<div class=\"center\">\r\n<p>See the stats tab for more info!</p>\r\n</div>\r\n<div class=\"center\">\r\n<ion-button (click)=\"mainMenu()\">Return to main menu</ion-button>\r\n</div>\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Round {{votes.round}} out of 10\n      <img class='header-icon' *ngIf=\"!isDemocrat\" src=\"../../assets/images/republicanIcon.png\">\n      <img class='header-icon' *ngIf=\"isDemocrat\" src=\"../../assets/images/democratIcon.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" >\n  <div class=\"center\">\n    <p><strong>Turn:</strong> {{(votes.turn%2)+1}} of 2 <strong>Funds:</strong> ${{votes.funds}}</p>\n  </div>\n  <div class=\"center\">\n    <p>{{getCurrentTurn()}}</p>\n  </div>\n  <ion-button class=\"option\" (click)=\"fundraise()\"><img src=\"../../assets/images/funds.png\">Fundraise!</ion-button>\n  <ion-button class=\"option\" (click)=\"campaign()\"><img src=\"../../assets/images/campaign.png\">Campaign!</ion-button>\n  <ion-button class=\"option\" (click)=\"advertising()\"><img src=\"../../assets/images/ads.png\">Run Advertising!</ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map