import os

# lazy way to get all the avatars hahah

def listar_avatares(pasta):
    avatars = []

    for filename in os.listdir(pasta):
        if filename.endswith(('.png', '.jpg', '.jpeg')):
            avatars.append(f"'/avatars/{filename}'")
    
    return avatars

caminho_da_pasta = '../public/avatars'
avatars = listar_avatares(caminho_da_pasta)

print("const avatars = [")
for avatar in avatars:
    print(f"    {avatar},")
print("];")
