import { Scene } from "phaser";
import { EventBus } from "../EventBus";
import { Card } from "../components/Card"; // 只導入基本卡片類別

export class Game extends Scene {
    private card: Card; // 單張卡片測試

    constructor() {
        super("Game");
    }

    preload() {
        this.load.setPath("assets");

        // 載入基本場景資源
        this.load.image("background", "bg.png");
        this.load.image("logo", "logo.png");

        // 載入卡片資源
        this.load.image("cardFrame", "card-frame.png"); // 卡片框
        this.load.image("cardImage", "card-image.png"); // 卡片圖片
        this.load.image("cardBack", "card-back.png"); // 卡片背面
    }

    create() {
        // 創建背景
        this.add.image(512, 384, "background");

        // 創建一張測試卡片
        this.card = new Card(this, {
            scene: this,
            x: 400, // 卡片 X 位置
            y: 300, // 卡片 Y 位置
            cardName: "測試卡片",
            description: "這是一張測試卡片",
            manaCost: 5,
            cardType: "MONSTER",
            frontFrame: "cardFrame",
            cardImage: "cardImage",
            backImage: "cardBack",
        });

        // 設置卡片可玩狀態（可選）
        // this.card.setPlayable(true);

        EventBus.emit("current-scene-ready", this);
    }

    update() {
        // 如果需要持續更新的邏輯可以放這裡
    }
}
