import pygame
import random
import sys

# Initialize Pygame
pygame.init()
width, height = 800, 600
win = pygame.display.set_mode((width, height))
clock = pygame.time.Clock()

# Game variables
basket = pygame.Rect(350, 550, 100, 20)
apple = pygame.Rect(random.randint(0, 780), 0, 20, 20)
apple_speed = 5
score = 0
font = pygame.font.Font(None, 36)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT] and basket.left > 0:
        basket.left -= 5
    if keys[pygame.K_RIGHT] and basket.right < width:
        basket.right += 5
    
    apple.y += apple_speed
    if apple.y > height:
        apple.topleft = (random.randint(0, 780), 0)
    
    if basket.colliderect(apple):
        score += 1
        apple.topleft = (random.randint(0, 780), 0)
    
    win.fill((255, 255, 255))
    pygame.draw.rect(win, (0, 0, 0), basket)
    pygame.draw.ellipse(win, (255, 0, 0), apple)
    score_text = font.render(f"Score: {score}", True, (0, 0, 0))
    win.blit(score_text, (10, 10))
    
    pygame.display.flip()
    clock.tick(30)
