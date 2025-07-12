<template>
    <div class="main">
        <div>
            <img class="logo" src="../../assets/fizjomed_logo_2.png"
        </div>
        <div>
            <p> 
                Gabinet Rehabilitacji Fizjomed został założony w 2003r. Gabinet dysponuje nowoczesnym sprzętem do fizykoterapii. W ofercie znajdą Państwo większość zabiegów fizykalnych wykonywanych we współczesnej fizykoterapii.
            </p> 
            <p>    
                Oferujemy możliwość skorzystania z zabiegów Medycyny Manualnej wg. dr. Jemes'a Cyriax'a oraz 
                Medycyny Manualnej wg. koncepcji Karela Lewita. Systemy te pozwalają dokładnie zdiagnozować przyczynę 
                dolegliwości związanych np: z bólem pleców, barku, łokcia i w innych zablokowaniach i schorzeniach 
                czynnościowych narządu ruchu, które są odwracalne. Po dokładnym zdiagnozowaniu pacjenta nasz personel dla 
                potrzeb terapii wykona serię zabiegów manualnych. W gabinecie wykonujemy również masaże: leczniczy, 
                klasyczny, relaksacyjny oraz prowadzimy ćwiczenia dostosowane do schorzeń pacjentów.
            </p>

            <p>
                Gabinet realizuje świadczenia w ramach umowy z NFZ.
            </p>

            <p>
                „Fizjomed” znajduje się w Centrum Handlowym „Outlet Graffica” na III piętrze. Budynek wyposażony jest 
                w przestronną windę. Do dyspozycji klientów jest również parking. 
            </p>
        </div>
        <div class="">
            <div class="">
                <img class="" src="../../assets/fizjomed_nfz.png">
                <img class="graffica" src="../../assets/fozjomed_graffica.png">
            </div>
            <div class="">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5126.033377349853!2d21.994286613085052!3d50.035875017007456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfb013aa7ead1%3A0xa78ebc26349a9d69!2sFizjomed.%20Gabinet%20rehabilitacji!5e0!3m2!1spl!2spl!4v1751718851132!5m2!1spl!2spl"  style="" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .graffica {
        width: 500px;
    }

    .place {
        display: flex;
    }

    .logo{
        height: 300px;
        margin-bottom: 50px;
    }

    .main {
        padding: 50px 50px 50px 50px;
        width: auto;
        /* min-width: 990px; */
        place-content: center;
        place-items: center;
        margin: 0 20px 0 20px;
        background-color: #F9F6EE;
        border-radius: 50px;
        position: relative;
        border-style: solid;
        border-width: 2px;
        border-color: rgb(90, 89, 89);
    }

    p {
        color: #000000;
        font-size: 35px;
        font-weight: 500;
        margin-bottom: 40px;
        /* text-align: justify; */
    }

    iframe {
        border-style: solid;
        border-width: 2px;
        border-color: gray;
        width: 100%;
    }

</style>