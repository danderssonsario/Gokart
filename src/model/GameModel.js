import { Field } from './Field.js'
import { Ball } from './Ball.js'
import { Sprite } from '../SpriteJS/Sprite.js'

/**
 * Encapsulates game objects and rules.
 */
export class GameModel {
  #field
  #ball
  #sprite1
  #sprite2

  /**
   *
   * @param width
   * @param height
   * @param context
   */
  constructor (width, height, context) {
    this.#field = new Field(width, height, 75, 150)
    this.#ball = new Ball(width / 2 - 25, height / 2 - 25, 25)
    this.#ball.bounds = { x: { min: 0, max: width }, y: { min: 0, max: height } }

    const optionsForPlayer1 = {
      positionX: 100,
      positionY: height / 2 - 50,
      width: 80,
      height: 80,
      image: '../image/player1.png',
      angle: 0
    }

    const optionsForPlayer2 = {
      positionX: width - 200,
      positionY: height / 2 - 50,
      width: 80,
      height: 80,
      image: '../image/player2.png',
      angle: 0
    }

    this.#sprite1 = new Sprite('player1', context, optionsForPlayer1)
    this.#sprite2 = new Sprite('player2', context, optionsForPlayer2)
    this.#sprite1.bounds = { x: { min: 0, max: width }, y: { min: 0, max: height } }
    this.#sprite2.bounds = { x: { min: 0, max: width }, y: { min: 0, max: height } }
    this.#addPlayerAnimations()
    this.#sprite1.setCurrentAnimation('right')
    this.#sprite2.setCurrentAnimation('left')
  }

  /**
   *
   */
  update () {
    this.#sprite1.update()
    this.#sprite2.update()
    this.#ball.update()
  }

  /**
   *
   * @param player
   */
  #addPlayerAnimations () {
    this.#sprite1.addAnimation({
      name: 'down',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 0,
      delayPerFrame: 100
    })
    this.#sprite1.addAnimation({
      name: 'left',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 1,
      delayPerFrame: 100
    })
    this.#sprite1.addAnimation({
      name: 'right',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 2,
      delayPerFrame: 100
    })
    this.#sprite1.addAnimation({
      name: 'up',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 3,
      delayPerFrame: 100
    })

    this.#sprite2.addAnimation({
      name: 'down',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 0,
      delayPerFrame: 100
    })
    this.#sprite2.addAnimation({
      name: 'left',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 1,
      delayPerFrame: 100
    })
    this.#sprite2.addAnimation({
      name: 'right',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 2,
      delayPerFrame: 100
    })
    this.#sprite2.addAnimation({
      name: 'up',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 3,
      delayPerFrame: 100
    })
  }

  /**
   *
   */
  get field () {
    return this.#field
  }

  /**
   *
   */
  get ball () {
    return this.#ball
  }

  get sprite1 () {
    return this.#sprite1
  }

  get sprite2 () {
    return this.#sprite2
  }
}
