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
game_paused = False

# Define colors
white = (255, 255, 255)
black = (0, 0, 0)
red = (255, 0, 0)
green = (0, 255, 0)

def draw_knife(surface, rect):
    pygame.draw.polygon(surface, black, [(rect.left, rect.top), (rect.right, rect.top), 
                                         (rect.right - 30, rect.bottom), (rect.left + 30, rect.bottom)])

def draw_buttons():
    pygame.draw.rect(win, red, stop_button)
    pygame.draw.rect(win, green, restart_button)
    stop_text = font.render("STOP", True, white)
    restart_text = font.render("RESTART", True, white)
    win.blit(stop_text, (stop_button.x + 10, stop_button.y + 10))
    win.blit(restart_text, (restart_button.x + 10, restart_button.y + 10))

# Define buttons
stop_button = pygame.Rect(650, 70, 100, 50)
restart_button = pygame.Rect(650, 130, 100, 50)
instructions = font.render("Use LEFT and RIGHT arrows to catch apples", True, black)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        if event.type == pygame.MOUSEBUTTONDOWN:
            mouse_pos = event.pos
            if stop_button.collidepoint(mouse_pos):
                game_paused = not game_paused
            if restart_button.collidepoint(mouse_pos):
                apple.topleft = (random.randint(0, 780), 0)
                score = 0
                game_paused = False
    
    if not game_paused:
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
    
    win.fill(white)
    draw_knife(win, knife)
    pygame.draw.ellipse(win, red, apple)
    score_text = font.render(f"Score: {score}", True, black)
    win.blit(score_text, (10, 10))
    win.blit(instructions, (200, 30))  # Adjusted position of instructions
    draw_buttons()
    
    pygame.display.flip()
    clock.tick(30)
