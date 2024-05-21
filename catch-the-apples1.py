import pygame
import random
import sys

# Initialize Pygame
pygame.init()
width, height = 800, 600
win = pygame.display.set_mode((width, height))
clock = pygame.time.Clock()

# Game variables
knife = pygame.Rect(350, 550, 100, 20)
apple = pygame.Rect(random.randint(0, 780), 0, 20, 20)
apple_speed = 5
score = 0
font = pygame.font.Font(None, 36)

def draw_knife(surface, rect):
    pygame.draw.polygon(surface, (0, 0, 0), [(rect.left, rect.top), (rect.right, rect.top), 
                                             (rect.right - 30, rect.bottom), (rect.left + 30, rect.bottom)])

instructions = font.render("Use LEFT and RIGHT arrows to catch apples", True, (0, 0, 0))

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT] and knife.left > 0:
        knife.left -= 5
    if keys[pygame.K_RIGHT] and knife.right < width:
        knife.right += 5
    
    apple.y += apple_speed
    if apple.y > height:
        apple.topleft = (random.randint(0, 780), 0)
    
    if knife.colliderect(apple):
        score += 1
        apple.topleft = (random.randint(0, 780), 0)
    
    win.fill((255, 255, 255))
    draw_knife(win, knife)
    pygame.draw.ellipse(win, (255, 0, 0), apple)
    score_text = font.render(f"Score: {score}", True, (0, 0, 0))
    win.blit(score_text, (10, 10))
    win.blit(instructions, (200, 10))
    
    pygame.display.flip()
    clock.tick(30)
