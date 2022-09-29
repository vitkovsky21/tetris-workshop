export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    Array(STAGE_WIDTH).fill([0, 'clear'])   
)

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      if (player.tetromino[y][x] !== 0) {
        if (
          !stage[Math.round(y + player.pos.y + moveY)] ||
          !stage[Math.round(y + player.pos.y + moveY)][Math.round(x + player.pos.x + moveX)] ||
          stage[Math.round(y + player.pos.y + moveY)][Math.round(x + player.pos.x + moveX)][1] !== 'clear'
        ) {
          console.log("STEP")
          return true;
        }
      }
    }
  }

  return false;
}