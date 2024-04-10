import { reactive } from 'vue'

export const store = reactive ({

    arrayNavbarr:[                                                     //array di oggetti della navbar superiore
    {
      text: '<i class="fa-solid fa-clock"></i> Open Hours: mon-sat - 9.00 - 18.00'
    },
    {
      text: '<i class=" telefono fa-solid fa-phone"></i> +1 (305)1234-5678'
    },
    {
      text: '<i class="fa-solid fa-envelope"></i>   +1 (305)1234-5678'
    }
  ],
    social:[
      {
        text: '<i class="fa-solid fa-phone"></i> +1(305)1234-5678' // array di oggetti del footer di destra
      },
      {
        text: '<i class="fa-solid fa-envelope"></i> hello@example.com'
      },
      {
        text: '<i class="fa-solid fa-location-dot"></i> Main Avenue, 987'
      },
    ],

    firstSectionCard:[
      {
        icona:'<i class="fa-solid fa-user-group"></i>',             // array di oggetti della prima sezione
        titolo:'Human Capital',
        testo:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos',  
      },
      {
        icona:'<i class="fa-solid fa-chart-pie">',
        titolo:'Core Business',
        testo:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ',
      },
      {
        icona:'<i class="fa-regular fa-clock"></i>',
        titolo:'Performance',
        testo:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimo',
      }
    ],

    lastSectionCard:[                                               // array di oggetti dell'ultima sezione
      {
        logo: '<img src="/img/logo-1.png" alt="">',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimoLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimo Lorem ipsum dolor sit amet'
      },
      {
        logo: '<img src="/img/logo-2.png" alt="">',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimoLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimoLorem ipsum dolor sit amet consectetur '
      },
      {
        logo: '<img src="/img/logo-3.png" alt="">',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimoLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimo'
      },
    ],
      arrayFooter:[ '+1(305)1234-5678','hello@example.com','Main Avenue, 987'],   //array del footer
})
