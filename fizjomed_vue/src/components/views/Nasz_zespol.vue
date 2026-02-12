<template>
    <div class="onas">
        <div class="glass">
            <div class="zespol">
                <div>
                    <img src="../../assets/fizjomed_maciej.jpg">
                    <h1>Maciej Mierzejewski</h1>
                    <p>W roku 1999 ukończył Medyczne Studium Zawodowe w Warszawie. Następnie obronił tytuł licencjata i magistra fizjoterapii na AWF Kraków. Pracę w zawodzie rozpoczął w Rehabilitacyjnym Szpitalu Dziecięcym w Radziszowie. Po przeprowadzce do Rzeszowa podjął pracę w Centrum Medycznym „Medicor”. Od 2003 roku jest współwłaścicielem i fizjoterapeutą w Gabinecie Rehabilitacji „FIZJOMED”.</p>
            
                    <p>W latach 2003-2015 ukończył liczne kursy podyplomowe m.in OMI Cyriax zakończony egzaminem i uzyskaniem tytułu Międzynarodowego Terapeuty tej metody, kurs Kinesiology Tapingu, Anatomii Palpacyjnej oraz Badanie i fizjoterapia funkcjonalna w uszkodzeniach stawu kolanowego.</p>
                </div>
                <div>
                    <img src="../../assets/fizjomed_grzegorz.jpg">
                    <h1>Grzegorz Bury</h1>
                    
                    <p>Ukończył Medyczne Studium Zawodowe Wydział Fizjoterapii w Stalowej Woli. Przygodę z zawodem zaczął w 1994 w WKS Wawel Kraków jako masażysta sportowy,z placówką tą związany był 2 lata. Następnie 6 miesięcy pracował w DPS Babica. Po Domu Pomocy Społecznej czas przyszedł na Przychodnię Kolejową w Rzeszowie (OLK) tam na stanowisku masażysty pracował w latach 1997-2001 . Z OLK przeniósł się do Centrum Medycznego MEDICOR i przez 2,5 roku pracował tam na stanowisku fizjoterapeuty. Od 2003 r wraz z Maciejem Mierzejewskim prowadzi swój Gabinet Rehabilitacji Fizjomed.</p>

                    W ramach doszkolenia 22.12.2014 r.ukończył kurs badania i leczenia zaburzeń czynności narządu ruchu wg.koncepcji Praskiej Szkoły Medycyny Manualnej (Terapii Manualnej Koncepcji K. Lewita). W czasie wolnym 
                    akumulatory ładuje na łonie przyrody od 1994r jest myśliwym, a od kilku lat także wędkarzem.
                </div>
            </div>
            <div class="certyfikaty">
            <div
                v-for="(image, index) in images"
                :key="index"
                class="image-container"
                :class="{ expanded: expandedIndex === index }"
                @click="toggleExpand(index)"
                >
                <img :src="image" alt="certyfikat" />
    
                <div v-if="expandedIndex === index">
                    <button class="arrow left" @click.stop="prevImage">❮</button>
                    <button class="arrow right" @click.stop="nextImage">❯</button>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<style scoped>
    img {
        height: 500px;
    }

    .zespol {
        color: black;
        display: flex;
        place-content: center;
    }

    .glass {
        background: rgba(145, 125, 125, 0.1);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        border: 1px solid rgba(235, 168, 168, 0.4);
        padding: 50px;
    }

    .onas {
        padding: 50px;
        width: auto;
        /* place-content: center; */
        place-items: center;
    }


    .certyfikaty {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 50px;
    }

    .image-container {
        width: 300px;
        height: 200px;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
        z-index: 1;
       border-width: 100px;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .image-container.expanded {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        background: rgba(0, 0, 0, 0.8);
        padding: 10px;
        border-radius: 8px;
        height: 90vh;
        width: 90vw;
    }

    .image-container.expanded img {
        max-width: 90vw;
        max-height: 90vh;
        object-fit: contain;
        display: block;
        margin: 0 auto;
    }



    .arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(255,255,255,0.7);
        border: none;
        font-size: 2rem;
        padding: 0 10px;
        cursor: pointer;
        user-select: none;
        border-radius: 50%;
        transition: background-color 0.3s;
        z-index: 1100;
    }

    .arrow:hover {
    background-color: rgba(255,255,255,0.9);
    }

    .arrow.left {
    left: 10px;
    }

    .arrow.right {
    right: 10px;
    }
</style>

<script setup>
    import { ref } from 'vue'
    import img1 from '@/assets/fizjomed_cer_1.png'
    import img2 from '@/assets/fizjomed_cer_2.png'
    import img3 from '@/assets/fizjomed_cer_3.png'
    import img4 from '@/assets/fizjomed_cer_4.png'
    import img5 from '@/assets/fizjomed_cer_5.png'
    import img6 from '@/assets/fizjomed_cer_6.png'
    import img7 from '@/assets/fizjomed_cer_7.png'
    import img8 from '@/assets/fizjomed_cer_8.png'

const images = ref([img1, img2, img3, img4, img5, img6, img7, img8])

const expandedIndex = ref(null)

function toggleExpand(index) {
  if (expandedIndex.value === index) {
    expandedIndex.value = null 
  } else {
    expandedIndex.value = index
  }
}

function nextImage() {
  if (expandedIndex.value === null) return;
  expandedIndex.value = (expandedIndex.value + 1) % images.value.length;
  updateOrientation(expandedIndex.value);
}

function prevImage() {
  if (expandedIndex.value === null) return;
  expandedIndex.value = (expandedIndex.value - 1 + images.value.length) % images.value.length;
  updateOrientation(expandedIndex.value);
}

</script>