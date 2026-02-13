<template>
    <div class="main">
        <div class="glass">
            <div class="text">
                <p>
                    <b>Gabinet Rehabilitacji Fizjomed </b> działa od 2003 roku. Oferujemy nowoczesne i skuteczne metody terapii z wykorzystaniem <b>profesjonalnego sprzętu</b> do fizykoterapii. W naszej ofercie znajdą Państwo szeroki zakres zabiegów, zgodnych ze współczesnymi standardami rehabilitacji.
                </p>
                <p>
                    <b>Specjalizujemy się w terapii manualnej</b>, prowadzimy zabiegi według metody dr. James'a Cyriax'a oraz koncepcji Karela Lewita. Obie te techniki umożliwiają precyzyjne zdiagnozowanie przyczyn dolegliwości, takich jak <b>bóle pleców, barków, łokci czy innych ograniczeń w obrębie układu ruchu.</b> Dzięki temu możemy skutecznie pomagać w przypadku schorzeń czynnościowych, które są odwracalne i dobrze reagują na odpowiednią terapię.
                </p>
                <p>
                    <b>Po dokładnej diagnostyce</b>, nasz wykwalifikowany personel dobiera indywidualny plan leczenia, obejmujący serię zabiegów <b>manualnych, masaży oraz ćwiczeń</b> dostosowanych do konkretnego problemu pacjenta. Wykonujemy m.in. masaże lecznicze, klasyczne i relaksacyjne.
                </p>
                <p>
                    <b>Gabinet realizuje również świadczenia w ramach umowy z NFZ.</b>
                </p>
                <p>
                    <b>Fizjomed</b> mieści się w Centrum Handlowym Outlet Graffica na III piętrze. Budynek jest wyposażony w przestronną windę, a dla naszych pacjentów dostępny jest wygodny parking.
                </p>
            </div>
            <div class="">
                    <img class="" src="../../assets/fizjomed_nfz_bg.png">
                    <img class="graffica" src="../../assets/fozjomed_graffica.png">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .glass {
        background: #f9f6ee;
        /* border-radius: 16px; */
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        /* backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px); */
        border: 1px solid rgba(235, 168, 168, 0.4);
        padding: 50px;
    }

    .graffica {
        width: 500px;
    }

    .place {
        display: flex;
    }

    .logo{
        height: 150px;
        margin-bottom: 50px;
    }

    .main {
        /* padding: 0 50px 50px 50px; */
        width: 100vw;
        /* place-content: center; */
        place-items: center;
    }

    b {
        font-size: 30px;
        font-weight: 600;
    }
    
    p {
        color: #000000;
        font-size: 28px;
        font-weight: 400;
        margin-bottom: 35px;
    }

    .text {
        width: auto;
        /* max-width: 1200px; */
        margin-top: 20px;
        /* background: rgba(145, 125, 125, 0.1);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        border: 1px solid rgba(235, 168, 168, 0.4); */
        padding: 20px;
    }

    iframe {
        border-style: solid;
        border-width: 2px;
        border-color: gray;
        width: 100%;
    }

</style>