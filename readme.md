##  Compilar contenedor

docker build -t sgt/miprimeraapi . 

## Ejecutar contenedor 


docker run --rm -d -p 3000:3000 sgt/miprimeraapi 