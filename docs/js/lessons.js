export const lessons = [
  {
    numLessons: 4,
    issue: 'SpringBoot Security & JWT',
    day: 49, // inicio 27 de Septiembre
    msg: 'La programación web segura es una inversión que protege a los usuarios y a las empresas.',
    myProgress: '🥚>🐣>🐤>🐓>🕊️>🦃>🦅>🪂>🛩️>✈️>👨‍🚀>🚀>🛸>🦸‍♂️',

    exercise: [
      {
        numExercise: 1,
        title: '',
        description: `<small> <li> <b> PASO 1 </b>: Regístrate en POST /user pasando el user y la password  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_1.png?raw=true">ejemplo</a></li>
        <li> <b> PASO 2 </b>: Logéate en POST /login con la user y la password que has pasado anteriormente  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_2.png?raw=true">ejemplo</a></li> 
        <li> <b> PASO 3 </b>: Una vez obtenido tu TOKEN que da acceso a la API ya puedes acceder a las direrentes rutas colocando el TOKEN en el header de la pertición http o https  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_3.png?raw=true">ejemplo</a></li> 
        <li> <b> PASO 4 </b>: Podrás acceder a los diferentes Endpoints..  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_4.png?raw=true">ejemplo</a></li> 
        <table class="table table-striped">
        <thead>
          <tr>
            <th>ENTITY</th>
            <th>GET ALL</th>
            <th>GET ONE</th>
            <th>POST</th>
            <th>PUT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <th scope="row">PIEZAS</th>
          <td>GET /api/v1/piezas</td>
          <td>GET /api/v1/pieza/{id}</td>
          <td>POST /api/v1/pieza</td>
          <td>PUT /api/v1/pieza/{id}</td>
          <td>DELETE /api/v1/pieza/{id}</td>
  
          </tr>
          <tr>
          <th scope="row">PROVEEDOR</th>
          <td>GET /api/v1/proveedores</td>
          <td>GET /api/v1/proveedor/{id}</td>
          <td>POST /api/v1/proveedor</td>
          <td>PUT /api/v1/proveedor/{id}</td>
          <td>DELETE /api/v1/proveedor/{id}</td>
          </tr>
          <tr>
          <th scope="row">SUMINISTRA</th>
          <td>GET /api/v1/suministras</td>
          <td>GET /api/v1/suministra/{id}</td>
          <td>POST /api/v1/suministra</td>
          <td>PUT /api/v1/suministra/{id}</td>
          <td>DELETE /api/v1/suministra/{id}</td>
          </tr>
        </tbody>
      </table> 
       </small>`,
        urlCode:
          'https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/tree/main/TA27_1',
        urlPG: '',
      },
      {
        numExercise: 2,
        title: '',
        description: `<small> <li> <b> PASO 1 </b>: Regístrate en POST /user pasando el user y la password  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_1.png?raw=true">ejemplo</a></li>
        <li> <b> PASO 2 </b>: Logéate en POST /login con la user y la password que has pasado anteriormente  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_2.png?raw=true">ejemplo</a></li> 
        <li> <b> PASO 3 </b>: Una vez obtenido tu TOKEN que da acceso a la API ya puedes acceder a las direrentes rutas colocando el TOKEN en el header de la pertición http o https  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_3.png?raw=true">ejemplo</a></li> 
        <li> <b> PASO 4 </b>: Podrás acceder a los diferentes Endpoints..  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_4.png?raw=true">ejemplo</a></li> 
        <table class="table table-striped">
        <thead>
          <tr>
            <th>ENTITY</th>
            <th>GET ALL</th>
            <th>GET ONE</th>
            <th>POST</th>
            <th>PUT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <th scope="row">CIENTIFICO</th>
          <td>GET /api/v1/cientificos</td>
          <td>GET /api/v1/cientifico/{id}</td>
          <td>POST /api/v1/cientifico</td>
          <td>PUT /api/v1/cientifico/{id}</td>
          <td>DELETE /api/v1/cientifico/{id}</td>
  
          </tr>
          <tr>
          <th scope="row">PROYECTOS</th>
          <td>GET /api/v1/proyectos</td>
          <td>GET /api/v1/proyecto/{id}</td>
          <td>POST /api/v1/proyecto</td>
          <td>PUT /api/v1/proyecto/{id}</td>
          <td>DELETE /api/v1/proyecto/{id}</td>
          </tr>
        </tbody>
      </table> 
       </small>`,
        urlCode:
          'https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/tree/main/TA27_2',
        urlPG: '',
      },
      {
        numExercise: 3,
        title: '',
        description: `<small> <li> <b> PASO 1 </b>: Regístrate en POST /user pasando el user y la password  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_1.png?raw=true">ejemplo</a></li>
        <li> <b> PASO 2 </b>: Logéate en POST /login con la user y la password que has pasado anteriormente  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_2.png?raw=true">ejemplo</a></li> 
        <li> <b> PASO 3 </b>: Una vez obtenido tu TOKEN que da acceso a la API ya puedes acceder a las direrentes rutas colocando el TOKEN en el header de la pertición http o https  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_3.png?raw=true">ejemplo</a></li> 
        <li> <b> PASO 4 </b>: Podrás acceder a los diferentes Endpoints..  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_4.png?raw=true">ejemplo</a></li>  
        <table class="table table-striped">
        <thead>
          <tr>
            <th>ENTITY</th>
            <th>GET ALL</th>
            <th>GET ONE</th>
            <th>POST</th>
            <th>PUT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
     
            <th scope="row">CAJERO</th>
          
            <td>GET /api/v1/cajeros</td>
            <td>GET /api/v1/cajero/{id}</td>
            <td>POST /api/v1/cajero</td>
            <td>PUT /api/v1/cajero/{id}</td>
            <td>DELETE /api/v1/cajero/{id}</td>
          </tr>
          <tr>
            <th scope="row"> MAQUINA_REG </th>
        
            <td>GET /api/v1/maquina-registradoras</td>
            <td>GET /api/v1/maquina-registradora/{id}</td>
            <td>POST /api/v1/maquina-registradora</td>
            <td>PUT /api/v1/maquina-registradora/{id}</td>
            <td>DELETE /api/v1/maquina-registradora/{id}</td>
          </tr>
          <tr>
            <th scope="row"> VENTA </th>
        
            <td>GET /api/v1/ventas</td>
            <td>GET /api/v1/venta/{id}</td>
            <td>POST /api/v1/venta</td>
            <td>PUT /api/v1/venta/{id}</td>
            <td>DELETE /api/v1/venta/{id}</td>
          </tr>
          <tr>
            <th scope="row"> RODUCTO </th>
            
            <td>GET /api/v1/productos</td>
            <td>GET /api/v1/producto/{id}</td>
            <td>POST /api/v1/producto</td>
            <td>PUT /api/v1/producto/{id}</td>
            <td>DELETE /api/v1/producto/{id}</td>
          </tr>
        </tbody>
      </table> 
       </small>`,
        urlCode:
          'https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/tree/main/TA27_3',
        urlPG: '',
      },
      {
        numExercise: 4,
        title: '',
        description: `<small> <li> <b> PASO 1 </b>: Regístrate en POST /user pasando el user y la password  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_1.png?raw=true">ejemplo</a></li>
        <li> <b> PASO 2 </b>: Logéate en POST /login con la user y la password que has pasado anteriormente  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_2.png?raw=true">ejemplo</a></li> 
        <li> <b> PASO 3 </b>: Una vez obtenido tu TOKEN que da acceso a la API ya puedes acceder a las direrentes rutas colocando el TOKEN en el header de la pertición http o https  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_3.png?raw=true">ejemplo</a></li> 
        <li> <b> PASO 4 </b>: Podrás acceder a los diferentes Endpoints..  <a href="https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/blob/main/docs/assets/PASO_4.png?raw=true">ejemplo</a></li> 
       
        <table class="table table-striped">
        <thead>
          <tr>
            <th>ENTITY</th>
            <th>GET ALL</th>
            <th>GET ONE</th>
            <th>POST</th>
            <th>PUT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
     
            <th scope="row">EQUIPOS</th>
          
            <td>GET /api/v1/equiposs</td>
            <td>GET /api/v1/equipo/{id}</td>
            <td>POST /api/v1/equipo</td>
            <td>PUT /api/v1/equipo/{id}</td>
            <td>DELETE /api/v1/equipo/{id}</td>
          </tr>
          <tr>
            <th scope="row"> FACULTAD</th>
        
            <td>GET /api/v1/facultades</td>
            <td>GET /api/v1/facultad/{id}</td>
            <td>POST /api/v1/facultad</td>
            <td>PUT /api/v1/facultad/{id}</td>
            <td>DELETE /api/v1/facultad/{id}</td>
          </tr>
          <tr>
            <th scope="row"> INVESTIGADOR</th>
        
            <td>GET /api/v1/investigadores</td>
            <td>GET /api/v1/investigadore/{id}</td>
            <td>POST /api/v1/investigador</td>
            <td>PUT /api/v1/investigador/{id}</td>
            <td>DELETE /api/v1/investigador/{id}</td>
          </tr>
          <tr>
            <th scope="row"> RESERVA </th>
            
            <td>GET /api/v1/reservas</td>
            <td>GET /api/v1/reserva/{id}</td>
            <td>POST /api/v1/reserva</td>
            <td>PUT /api/v1/reserva/{id}</td>
            <td>DELETE /api/v1/reserva/{id}</td>
          </tr>
        </tbody>
      </table> 
       </small>`,
        urlCode:
          'https://github.com/TECHMA-Bootcamp-FullStack-Java-Angular/dmb-tsys-spring-1611-ta27/tree/main/TA27_4',
        urlPG: '',
      },
    ],
  },
]
