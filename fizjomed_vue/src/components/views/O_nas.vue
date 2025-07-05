<template>
    <div class="main">
        <div>
            <p> 
                Gabinet Rehabilitacji Fizjomed został założony w 2003r. Dysponuje nowoczesnym sprzętem do fizykoterapii.
                W ofercie gabinetu znajdą Państwo większość zabiegów fizykalnych wykonywanych we współczesnej fizykoterapii.
            </p> 
            <p>    
                Oferujemy możliwość skorzystania z zabiegów Medycyny Manualnej wg. dr. Jemes`a Cyriax`a oraz 
                Medycyny Manualnej wg. koncepcji Karela Lewita. Systemy te pozwalają dokładnie zdiagnozować przyczynę 
                dolegliwości związanych np: z bólem pleców, barku, łokcia i w innych zablokowaniach i schorzeniach 
                czynnościowych narządu ruchu, które są odwracalne. Po dokładnym zdiagnozowaniu pacjenta nasz personel dla 
                potrzeb terapii wykona serię zabiegów manualnych.W gabinecie wykonujemy również masaże: leczniczy, 
                klasyczny, relaksacyjny, oraz prowadzimy ćwiczenia dostosowane do schorzeń pacjentów.
            </p>

            <p>
                Gabinet realizuje świadczenia w ramach umowy z NFZ.
            </p>

            <p>
                „Fizjomed” znajduje się w Centrum Handlowym „Outlet Graffica” na III piętrze. Budynek wyposażony jest 
                w przestronną windę, do dyspozycji klientów jest również parking. 
            </p>
        </div>
        <div>
            <img class="nfz" src="../../assets/fizjomed_nfz.png">

            <img src="../../assets/fozjomed_graffica.png">

            
        </div>
    </div>
    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5126.033377349853!2d21.994286613085052!3d50.035875017007456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfb013aa7ead1%3A0xa78ebc26349a9d69!2sFizjomed.%20Gabinet%20rehabilitacji!5e0!3m2!1spl!2spl!4v1751718851132!5m2!1spl!2spl"  style="" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<style scoped>
    .main {
        padding: 50px;
        width: 1590px;
        min-width: 990px;
        place-content: center;
        place-items: center;
        /* display: flex; */
        background-color: #009A9A;
        height: 100%;
        /* border-radius: 50px; */
        border-bottom-left-radius: 50px;
    }

    .map {
        margin-left: 5px;
    }

    p {
        color: black;
    }

    iframe {
        height: 100vh;
        width: 100%;
        border-style: solid;
        border-width: 2px;
        border-color: gray;
        /* border-radius: 50px; */
        border-bottom-right-radius: 50px;
        border-top-right-radius: 50px;
    }

    .nfz {
        width: 50%;
        border-style: solid;
        border-width: 2px;
        border-color: #2F2284;
    }
</style>