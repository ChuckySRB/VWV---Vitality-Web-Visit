"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const users_router_1 = __importDefault(require("./routers/users.router"));
const checkups_router_1 = __importDefault(require("./routers/checkups.router"));
const reports_router_1 = __importDefault(require("./routers/reports.router"));
const checkuptype_router_1 = __importDefault(require("./routers/checkuptype.router"));
const departments_router_1 = __importDefault(require("./routers/departments.router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb' }));
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
mongoose_1.default.connect('mongodb://127.0.0.1:27017/VirtualWebVisit');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('db connection ok');
});
const router = express_1.default.Router();
router.use('/user', users_router_1.default);
router.use('/checkup', checkups_router_1.default);
router.use('/report', reports_router_1.default);
router.use('/checkuptype', checkuptype_router_1.default);
router.use('/department', departments_router_1.default);
app.use('/', router);
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map