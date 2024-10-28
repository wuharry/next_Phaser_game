export interface CardConfig {
    scene: Phaser.Scene;
    x: number;
    y: number;
    cardName: string;
    description: string;
    manaCost: number;
    texture?: string;
    cardType: "MONSTER" | "MAGIC" | "TRAP" | "FIELD";
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

    // 狀態
    protected isHovered: boolean = false; //是否滑鼠懸停
    protected isDragging: boolean = false; //是否拖曳
    protected isPlayable: boolean = false; // 是否可以使用卡牌

    constructor(scene: Phaser.Scene, config: CardConfig) {
        super(scene, config.x, config.y);

        // 初始化基本屬性
        this.cardName = config.cardName;
        this.description = config.description;
        this.manaCost = config.manaCost;
        this.cardType = config.cardType;
        // 創建卡牌視覺元素
        // this.createCardVisuals();

        // 添加互動性
        // this.setInteractive({ draggable: true });
        // this.setupInteractions();

        // 將容器添加到場景
        // config.scene.add.existing(this);
    }
}
