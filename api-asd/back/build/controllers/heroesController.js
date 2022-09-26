"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
class HeroesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const personajes = yield db_1.default.query('SELECT * from personajes');
            res.json(personajes);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const personaje = yield db_1.default.query('SELECT * from personajes WHERE id = ?', [id]);
            if (personaje.length > 0) {
                return res.json(personaje[0]);
            }
            else {
                res.status(404).json({ text: 'No existe el personaje' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.default.query('INSERT INTO personajes set ?', [req.body]);
            res.json({ message: 'Personaje agregado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield db_1.default.query('DELETE from personajes WHERE id = ?', [id]);
            res.json({ message: 'Personaje eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield db_1.default.query('UPDATE personajes set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Personaje actualizado' });
        });
    }
}
const heroesController = new HeroesController();
exports.default = heroesController;
