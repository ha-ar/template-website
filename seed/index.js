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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.seed = void 0;
var path_1 = require("path");
var course_1 = require("./course");
var home_1 = require("./home");
var post_1_1 = require("./post-1");
var post_2_1 = require("./post-2");
var posts_page_1 = require("./posts-page");
var shirt_image_1 = require("./shirt-image");
var seed = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var shirtDocID, courseDocID, postsPageJSON, postsPageID, homePageJSON, homePageID, postOneID, postTwoID;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, payload.create({
                    collection: 'users',
                    data: {
                        email: 'dev@payloadcms.com',
                        name: 'Payload Dev',
                        password: 'test',
                        roles: ['admin']
                    }
                })];
            case 1:
                _a.sent();
                return [4 /*yield*/, payload.create({
                        collection: 'media',
                        filePath: path_1["default"].resolve(__dirname, 'shirts.jpg'),
                        data: shirt_image_1.shirtImage
                    })];
            case 2:
                shirtDocID = (_a.sent()).id;
                return [4 /*yield*/, payload.create({
                        collection: 'media',
                        filePath: path_1["default"].resolve(__dirname, 'shirts.jpg'),
                        data: course_1.courseImage
                    })];
            case 3:
                courseDocID = (_a.sent()).id;
                postsPageJSON = JSON.parse(JSON.stringify(posts_page_1.posts).replace(/{{SHIRTS_IMAGE}}/g, shirtDocID));
                return [4 /*yield*/, payload.create({
                        collection: 'pages',
                        data: postsPageJSON
                    })];
            case 4:
                postsPageID = (_a.sent()).id;
                homePageJSON = JSON.parse(JSON.stringify(home_1.home)
                    .replace(/{{SHIRTS_IMAGE}}/g, shirtDocID)
                    .replace(/{{COURSE_IMAGE}}/g, courseDocID));
                return [4 /*yield*/, payload.create({
                        collection: 'pages',
                        data: homePageJSON
                    })
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                ];
            case 5:
                homePageID = (_a.sent()).id;
                return [4 /*yield*/, payload.create({
                        collection: 'posts',
                        data: JSON.parse(JSON.stringify(post_1_1.post1))
                    })
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                ];
            case 6:
                postOneID = (_a.sent()).id;
                return [4 /*yield*/, payload.create({
                        collection: 'posts',
                        data: JSON.parse(JSON.stringify(post_2_1.post2))
                    })];
            case 7:
                postTwoID = (_a.sent()).id;
                return [4 /*yield*/, payload.updateGlobal({
                        slug: 'header',
                        data: {
                            navItems: [
                                {
                                    link: {
                                        type: 'reference',
                                        reference: {
                                            relationTo: 'pages',
                                            value: postsPageID
                                        },
                                        label: 'Posts'
                                    }
                                },
                            ]
                        }
                    })];
            case 8:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.seed = seed;
