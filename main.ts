/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alexander
 * Created on: Oct 2025
 * This program shows a
 * light that moves around the perimiter.
*/

// variable
let sprite: game.LedSprite = null
let spriteX: number = 0
let spriteY: number = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // creates the sprite
    sprite = game.createSprite(0, 0)

    // sets sprite x and y to 0
    spriteY = 0
    spriteX = 0

    // moves the sprite across the top
    while (spriteX < 5) {
        sprite.set(LedSpriteProperty.X, spriteX)
        spriteX = spriteX + 1
        basic.pause(500)
    }

    // moves the sprite across the side
    while (spriteY < 5) {
        sprite.set(LedSpriteProperty.Y, spriteY)
        spriteY = spriteY + 1
        basic.pause(500)
    }

    // moves the sprite across the bottom
    while (spriteX > -1) {
        sprite.set(LedSpriteProperty.X, spriteX)
        spriteX = spriteX - 1
        basic.pause(500)
    }

    // moves the sprite across the side
    while (spriteY > -1) {
        sprite.set(LedSpriteProperty.Y, spriteY)
        spriteY = spriteY - 1
        basic.pause(500)
    }
    sprite.delete()
})

input.onButtonPressed(Button.B, function () {
    // creates the sprite
    sprite = game.createSprite(0, 0)

    // sets sprite x and y to 0
    spriteY = 0
    spriteX = 0

    // moves the sprite across the side
    while (spriteY < 5) {
        sprite.set(LedSpriteProperty.Y, spriteY)
        spriteY = spriteY + 1
        basic.pause(500)
    }
    // moves the sprite across the bottom
    while (spriteX < 5) {
        sprite.set(LedSpriteProperty.X, spriteX)
        spriteX = spriteX + 1
        basic.pause(500)
    }
    // moves the sprite across the side
    while (spriteY > -1) {
        sprite.set(LedSpriteProperty.Y, spriteY)
        spriteY = spriteY - 1
        basic.pause(500)
    }

    // moves the sprite across the top
    while (spriteX > -1) {
        sprite.set(LedSpriteProperty.X, spriteX)
        spriteX = spriteX - 1
        basic.pause(500)
    }
    sprite.delete()

})
