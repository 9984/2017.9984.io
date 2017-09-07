
//=include _dnt.js
//=include _smoothscroll.js
//=include svg.js/dist/svg.js
//=include gmaps/gmaps.js

document.addEventListener('DOMContentLoaded', function() {
    //
    // Open external links in new window
    //
    var links = document.links;

    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
        if (links[i].hostname != window.location.hostname) {
            links[i].target = '_blank';
        }
    }


    //
    // Map
    //
    const map = new GMaps({
        el: '#map',
        lat: 52.5157068,
        lng: 13.3992704,
        title: 'ESMT Berlin'
    })

    map.addMarker({
        lat: 52.5157068,
        lng: 13.3992704,
        title: 'ESMT Berlin',
        infoWindow: {
            content: '<h3>ESMT Berlin</h3><p>Schlossplatz 1<br>10178 Berlin</p>'
        }
    })


    //
    // Hero/header background
    //
    const draw = SVG('drawing')

    const nineNineEightFour = function() {

        const nineGroup = draw.group()

        nineGroup.rect(15, 15).fill('#ccc').move(50, 30)
        nineGroup.rect(15, 15).fill('#ccc').move(70, 30).opacity(.8)
        nineGroup.rect(15, 15).fill('#ccc').move(90, 30)
        nineGroup.rect(15, 15).fill('#ccc').move(110, 30)

        nineGroup.rect(15, 15).fill('#ccc').move(30, 50)
        nineGroup.rect(15, 15).fill('#ccc').move(50, 50).opacity(.5)
        nineGroup.rect(15, 15).fill('#ccc').move(70, 50)
        nineGroup.rect(15, 15).fill('#ccc').move(90, 50)
        nineGroup.rect(15, 15).fill('#ccc').move(110, 50).opacity(.8)
        nineGroup.rect(15, 15).fill('#ccc').move(130, 50)

        nineGroup.rect(15, 15).fill('#ccc').move(30, 70)
        nineGroup.rect(15, 15).fill('#ccc').move(50, 70)
        nineGroup.rect(15, 15).fill('#ccc').move(110, 70).opacity(.5)
        nineGroup.rect(15, 15).fill('#ccc').move(130, 70)

        nineGroup.rect(15, 15).fill('#ccc').move(30, 90)
        nineGroup.rect(15, 15).fill('#ccc').move(50, 90)
        nineGroup.rect(15, 15).fill('#ccc').move(110, 90).opacity(.5)
        nineGroup.rect(15, 15).fill('#ccc').move(130, 90)

        nineGroup.rect(15, 15).fill('#ccc').move(30, 110)
        nineGroup.rect(15, 15).fill('#ccc').move(50, 110)
        nineGroup.rect(15, 15).fill('#ccc').move(70, 110)
        nineGroup.rect(15, 15).fill('#ccc').move(90, 110).opacity(.5)
        nineGroup.rect(15, 15).fill('#ccc').move(110, 110)
        nineGroup.rect(15, 15).fill('#ccc').move(130, 110).opacity(.8)

        nineGroup.rect(15, 15).fill('#ccc').move(50, 130)
        nineGroup.rect(15, 15).fill('#ccc').move(70, 130)
        nineGroup.rect(15, 15).fill('#ccc').move(90, 130).opacity(.5)
        nineGroup.rect(15, 15).fill('#ccc').move(110, 130)
        nineGroup.rect(15, 15).fill('#ccc').move(130, 130)

        nineGroup.rect(15, 15).fill('#ccc').move(110, 150).opacity(.8)
        nineGroup.rect(15, 15).fill('#ccc').move(130, 150)

        nineGroup.rect(15, 15).fill('#ccc').move(110, 170)
        nineGroup.rect(15, 15).fill('#ccc').move(130, 170)

        nineGroup.rect(15, 15).fill('#ccc').move(50, 190)
        nineGroup.rect(15, 15).fill('#ccc').move(70, 190)
        nineGroup.rect(15, 15).fill('#ccc').move(90, 190).opacity(.5)
        nineGroup.rect(15, 15).fill('#ccc').move(110, 190)
        nineGroup.rect(15, 15).fill('#ccc').move(130, 190)

        nineGroup.rect(15, 15).fill('#ccc').move(50, 210)
        nineGroup.rect(15, 15).fill('#ccc').move(70, 210)
        nineGroup.rect(15, 15).fill('#ccc').move(90, 210).opacity(.8)
        nineGroup.rect(15, 15).fill('#ccc').move(110, 210)

        const nine2Group = draw.group()

        nine2Group.rect(15, 15).fill('#ccc').move(190, 30)
        nine2Group.rect(15, 15).fill('#ccc').move(210, 30).opacity(.5)
        nine2Group.rect(15, 15).fill('#ccc').move(230, 30)
        nine2Group.rect(15, 15).fill('#ccc').move(250, 30)

        nine2Group.rect(15, 15).fill('#ccc').move(170, 50).opacity(.5)
        nine2Group.rect(15, 15).fill('#ccc').move(190, 50)
        nine2Group.rect(15, 15).fill('#ccc').move(210, 50).opacity(.8)
        nine2Group.rect(15, 15).fill('#ccc').move(230, 50)
        nine2Group.rect(15, 15).fill('#ccc').move(250, 50).opacity(.5)
        nine2Group.rect(15, 15).fill('#ccc').move(270, 50)

        nine2Group.rect(15, 15).fill('#ccc').move(170, 70)
        nine2Group.rect(15, 15).fill('#ccc').move(190, 70)
        nine2Group.rect(15, 15).fill('#ccc').move(250, 70).opacity(.5)
        nine2Group.rect(15, 15).fill('#ccc').move(270, 70)

        nine2Group.rect(15, 15).fill('#ccc').move(170, 90)
        nine2Group.rect(15, 15).fill('#ccc').move(190, 90).opacity(.5)
        nine2Group.rect(15, 15).fill('#ccc').move(250, 90)
        nine2Group.rect(15, 15).fill('#ccc').move(270, 90)

        nine2Group.rect(15, 15).fill('#ccc').move(170, 110)
        nine2Group.rect(15, 15).fill('#ccc').move(190, 110)
        nine2Group.rect(15, 15).fill('#ccc').move(210, 110)
        nine2Group.rect(15, 15).fill('#ccc').move(230, 110).opacity(.8)
        nine2Group.rect(15, 15).fill('#ccc').move(250, 110)
        nine2Group.rect(15, 15).fill('#ccc').move(270, 110)

        nine2Group.rect(15, 15).fill('#ccc').move(190, 130)
        nine2Group.rect(15, 15).fill('#ccc').move(210, 130)
        nine2Group.rect(15, 15).fill('#ccc').move(230, 130).opacity(.5)
        nine2Group.rect(15, 15).fill('#ccc').move(250, 130)
        nine2Group.rect(15, 15).fill('#ccc').move(270, 130)

        nine2Group.rect(15, 15).fill('#ccc').move(250, 150)
        nine2Group.rect(15, 15).fill('#ccc').move(270, 150)

        nine2Group.rect(15, 15).fill('#ccc').move(250, 170).opacity(.8)
        nine2Group.rect(15, 15).fill('#ccc').move(270, 170)

        nine2Group.rect(15, 15).fill('#ccc').move(190, 190)
        nine2Group.rect(15, 15).fill('#ccc').move(210, 190)
        nine2Group.rect(15, 15).fill('#ccc').move(230, 190).opacity(.5)
        nine2Group.rect(15, 15).fill('#ccc').move(250, 190)
        nine2Group.rect(15, 15).fill('#ccc').move(270, 190)

        nine2Group.rect(15, 15).fill('#ccc').move(190, 210)
        nine2Group.rect(15, 15).fill('#ccc').move(210, 210)
        nine2Group.rect(15, 15).fill('#ccc').move(230, 210)
        nine2Group.rect(15, 15).fill('#ccc').move(250, 210)

        const eightGroup = draw.group()

        eightGroup.rect(15, 15).fill('#ccc').move(330, 30)
        eightGroup.rect(15, 15).fill('#ccc').move(350, 30).opacity(.5)
        eightGroup.rect(15, 15).fill('#ccc').move(370, 30)
        eightGroup.rect(15, 15).fill('#ccc').move(390, 30)

        eightGroup.rect(15, 15).fill('#ccc').move(310, 50)
        eightGroup.rect(15, 15).fill('#ccc').move(330, 50).opacity(.8)
        eightGroup.rect(15, 15).fill('#ccc').move(350, 50)
        eightGroup.rect(15, 15).fill('#ccc').move(370, 50).opacity(.5)
        eightGroup.rect(15, 15).fill('#ccc').move(390, 50)
        eightGroup.rect(15, 15).fill('#ccc').move(410, 50)

        eightGroup.rect(15, 15).fill('#ccc').move(310, 70)
        eightGroup.rect(15, 15).fill('#ccc').move(330, 70)
        eightGroup.rect(15, 15).fill('#ccc').move(390, 70).opacity(.5)
        eightGroup.rect(15, 15).fill('#ccc').move(410, 70)

        eightGroup.rect(15, 15).fill('#ccc').move(310, 90)
        eightGroup.rect(15, 15).fill('#ccc').move(330, 90)
        eightGroup.rect(15, 15).fill('#ccc').move(390, 90)
        eightGroup.rect(15, 15).fill('#ccc').move(410, 90)

        eightGroup.rect(15, 15).fill('#ccc').move(330, 110)
        eightGroup.rect(15, 15).fill('#ccc').move(350, 110)
        eightGroup.rect(15, 15).fill('#ccc').move(370, 110).opacity(.8)
        eightGroup.rect(15, 15).fill('#ccc').move(390, 110)

        eightGroup.rect(15, 15).fill('#ccc').move(330, 130)
        eightGroup.rect(15, 15).fill('#ccc').move(350, 130).opacity(.5)
        eightGroup.rect(15, 15).fill('#ccc').move(370, 130)
        eightGroup.rect(15, 15).fill('#ccc').move(390, 130)

        eightGroup.rect(15, 15).fill('#ccc').move(310, 150)
        eightGroup.rect(15, 15).fill('#ccc').move(330, 150)
        eightGroup.rect(15, 15).fill('#ccc').move(390, 150)
        eightGroup.rect(15, 15).fill('#ccc').move(410, 150)

        eightGroup.rect(15, 15).fill('#ccc').move(310, 170)
        eightGroup.rect(15, 15).fill('#ccc').move(330, 170)
        eightGroup.rect(15, 15).fill('#ccc').move(390, 170).opacity(.5)
        eightGroup.rect(15, 15).fill('#ccc').move(410, 170)

        eightGroup.rect(15, 15).fill('#ccc').move(310, 190)
        eightGroup.rect(15, 15).fill('#ccc').move(330, 190)
        eightGroup.rect(15, 15).fill('#ccc').move(350, 190)
        eightGroup.rect(15, 15).fill('#ccc').move(370, 190)
        eightGroup.rect(15, 15).fill('#ccc').move(390, 190)
        eightGroup.rect(15, 15).fill('#ccc').move(410, 190)

        eightGroup.rect(15, 15).fill('#ccc').move(330, 210)
        eightGroup.rect(15, 15).fill('#ccc').move(350, 210)
        eightGroup.rect(15, 15).fill('#ccc').move(370, 210)
        eightGroup.rect(15, 15).fill('#ccc').move(390, 210)

        const fourGroup = draw.group()

        fourGroup.rect(15, 15).fill('#ccc').move(450, 30)
        fourGroup.rect(15, 15).fill('#ccc').move(470, 30)
        fourGroup.rect(15, 15).fill('#ccc').move(530, 30)
        fourGroup.rect(15, 15).fill('#ccc').move(550, 30)

        fourGroup.rect(15, 15).fill('#ccc').move(450, 50).opacity(.5)
        fourGroup.rect(15, 15).fill('#ccc').move(470, 50)
        fourGroup.rect(15, 15).fill('#ccc').move(530, 50)
        fourGroup.rect(15, 15).fill('#ccc').move(550, 50)

        fourGroup.rect(15, 15).fill('#ccc').move(450, 70)
        fourGroup.rect(15, 15).fill('#ccc').move(470, 70)
        fourGroup.rect(15, 15).fill('#ccc').move(530, 70)
        fourGroup.rect(15, 15).fill('#ccc').move(550, 70)

        fourGroup.rect(15, 15).fill('#ccc').move(450, 90).opacity(.5)
        fourGroup.rect(15, 15).fill('#ccc').move(470, 90)
        fourGroup.rect(15, 15).fill('#ccc').move(530, 90)
        fourGroup.rect(15, 15).fill('#ccc').move(550, 90)

        fourGroup.rect(15, 15).fill('#ccc').move(450, 110)
        fourGroup.rect(15, 15).fill('#ccc').move(470, 110)
        fourGroup.rect(15, 15).fill('#ccc').move(490, 110)
        fourGroup.rect(15, 15).fill('#ccc').move(510, 110)
        fourGroup.rect(15, 15).fill('#ccc').move(530, 110)
        fourGroup.rect(15, 15).fill('#ccc').move(550, 110)

        fourGroup.rect(15, 15).fill('#ccc').move(450, 130)
        fourGroup.rect(15, 15).fill('#ccc').move(470, 130)
        fourGroup.rect(15, 15).fill('#ccc').move(490, 130).opacity(.5)
        fourGroup.rect(15, 15).fill('#ccc').move(510, 130)
        fourGroup.rect(15, 15).fill('#ccc').move(530, 130)
        fourGroup.rect(15, 15).fill('#ccc').move(550, 130)

        fourGroup.rect(15, 15).fill('#ccc').move(530, 150)
        fourGroup.rect(15, 15).fill('#ccc').move(550, 150)

        fourGroup.rect(15, 15).fill('#ccc').move(530, 170)
        fourGroup.rect(15, 15).fill('#ccc').move(550, 170)

        fourGroup.rect(15, 15).fill('#ccc').move(530, 190)
        fourGroup.rect(15, 15).fill('#ccc').move(550, 190).opacity(.5)

        fourGroup.rect(15, 15).fill('#ccc').move(530, 210)
        fourGroup.rect(15, 15).fill('#ccc').move(550, 210)

        const nineNineEightFourGroup = draw.group()

        nineNineEightFourGroup.add(nineGroup).add(nine2Group).add(eightGroup).add(fourGroup).addClass('nine-nine-eight-four')

        nineNineEightFourGroup.transform({ x: -12, y: 2 }).opacity(.3)
    }
    nineNineEightFour()

    // const rect2 = draw.rect(12, 12).fill('#f09')
    //
    // rect2.attr('y', 3).attr('x', '10%').animate().attr('x', '50%')

})
