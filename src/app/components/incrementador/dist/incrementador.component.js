"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var IncrementadorComponent = /** @class */ (function () {
    function IncrementadorComponent() {
        this.leyenda = 'Leyenda';
        this.porcentaje = 50;
        this.cambioValor = new core_1.EventEmitter();
    }
    IncrementadorComponent.prototype.ngOnInit = function () {
    };
    IncrementadorComponent.prototype.onChanges = function (evento) {
        //let elemHTML: any = document.getElementsByName('porcentaje') [0];
        if (evento >= 100) {
            this.porcentaje = 100;
        }
        else if (evento <= 0) {
            this.porcentaje = 0;
        }
        else {
            this.porcentaje = evento;
        }
        //elemHTML.value = this.porcentaje;
        this.txtProgress.nativeElement.value = this.porcentaje;
        this.cambioValor.emit(this.porcentaje);
    };
    IncrementadorComponent.prototype.cambiarValor = function (valor) {
        if (this.porcentaje <= 0 && valor < 0) {
            this.porcentaje = 0;
            return;
        }
        if (this.porcentaje >= 100 && valor > 0) {
            this.porcentaje = 100;
            return;
        }
        this.porcentaje = this.porcentaje + valor;
        this.cambioValor.emit(this.porcentaje);
        this.txtProgress.nativeElement.focus();
    };
    __decorate([
        core_1.ViewChild('txtProgress', { static: false })
    ], IncrementadorComponent.prototype, "txtProgress");
    __decorate([
        core_1.Input('nombre')
    ], IncrementadorComponent.prototype, "leyenda");
    __decorate([
        core_1.Input()
    ], IncrementadorComponent.prototype, "porcentaje");
    __decorate([
        core_1.Output()
    ], IncrementadorComponent.prototype, "cambioValor");
    IncrementadorComponent = __decorate([
        core_1.Component({
            selector: 'app-incrementador',
            templateUrl: './incrementador.component.html',
            styles: []
        })
    ], IncrementadorComponent);
    return IncrementadorComponent;
}());
exports.IncrementadorComponent = IncrementadorComponent;
