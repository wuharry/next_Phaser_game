export interface CardConfig {
    scene: Phaser.Scene;
    x: number;
    y: number;
    cardName: string;
    description: string;
    manaCost: number;
    texture?: string;
    cardType: "MONSTER" | "MAGIC" | "TRAP" | "FIELD";
    frontFrame?: string; // 卡片框圖片鍵值
    cardImage?: string; // 卡片主圖片鍵值
    backImage?: string; // 卡片背面圖片鍵值
}

export interface CardEvents {
    onPlay?: () => void; // 卡片被打出時觸發
    onEnter?: () => void; // 卡片進場時觸發
    onHover?: () => void; // 滑鼠懸停時觸發
}
export class Card extends Phaser.GameObjects.Container {
    protected cardName: string;
    protected description: string;
    protected manaCost: number;
    protected texture?: string;
    protected cardType: "MONSTER" | "MAGIC" | "TRAP" | "FIELD";

    // UI 元素
    protected background: Phaser.GameObjects.Rectangle;
    protected nameText: Phaser.GameObjects.Text; //名字顏色
    protected descriptionText: Phaser.GameObjects.Text; //描述文字顏色
    protected manaCostText: Phaser.GameObjects.Text; //花費魔力文字顏色
    protected frontFrame: Phaser.GameObjects.Image; // 卡片框
    protected cardImage: Phaser.GameObjects.Image; // 卡片主圖
    protected backImage: Phaser.GameObjects.Image; // 背面圖

    // 狀態
    protected isHovered: boolean = false; //是否滑鼠懸停
    protected isDragging: boolean = false; //是否拖曳
    protected isPlayable: boolean = false; // 是否可以使用卡牌
    protected isFaceUp: boolean = true; // 卡片正反面狀態

    // 原始位置（用於拖曳返回）
    protected originalX: number;
    protected originalY: number;

    constructor(scene: Phaser.Scene, config: CardConfig) {
        super(scene, config.x, config.y);

        // 初始化基本屬性
        this.cardName = config.cardName;
        this.description = config.description;
        this.manaCost = config.manaCost;
        this.cardType = config.cardType;

        // 初始化基本屬性
        this.cardName = config.cardName;
        this.description = config.description;
        this.manaCost = config.manaCost;
        this.cardType = config.cardType;

        // 創建卡片視覺元素
        this.createCardVisuals(config);

        // 設置互動性
        this.setupInteractions();

        // 將容器添加到場景
        scene.add.existing(this);
    }
    setupInteractions() {
        throw new Error("Method not implemented.");
    }
    protected createCardVisuals(config: CardConfig): void {
        this.background = this.scene.add
            .rectangle(0, 0, 100, 220, 0xffffff) //卡片寬100px,長120px,背景色白色
            .setStrokeStyle(2, 0x000000); //卡片邊框
        this.add(this.background);

        // 2. 卡片主圖層
        if (config.cardImage) {
            // this.cardImage = this.scene.add.image(0, -40, config.cardImage);
            // this.cardImage.setDisplaySize(220, 180);
            // this.add(this.cardImage);
        }
        // 3. 卡片框層
        if (config.frontFrame) {
            // this.frontFrame = this.scene.add.image(0, 0, config.frontFrame);
            // this.frontFrame.setDisplaySize(240, 340);
            // this.add(this.frontFrame);
        }
        throw new Error("Method not implemented.");
    }
}
