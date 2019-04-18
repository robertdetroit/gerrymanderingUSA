var state_porp = [];
var all_bills = [];
var bill_numb = [];
var colors = ["#CDCDCD", "#CAC8CA", "#C8C4C8", "#C6C0C6", "#C4BCC4" ,"#C2B8C2" ,"#C0B4C0", "#BEB0BE",
             "#BCACBC", "#BAA8BA", "#B8A4B8", "#B69FB6", "#B49BB4", "#B297B2", "#B093B0", "#AE8FAE",
             "#AC8BAC", "#A987A9", "#A783A7", "#A57FA5", "#A37BA3", "#A176A1", "#9F729F", "#9D6E9D",
             "#9B6A9B", "#996699", "#976297", "#955E95", "#935A93", "#915691", "#8F528F", "#8D4D8D",
             "#8B498B", "#894589", "#864186", "#843D84", "#823982", "#803580", "#7E317E", "#7C2D7C",
             "#7A287A", "#782478" ,"#762076", "#741C74", "#721872", "#701470" ,"#6E106E", "#6C0C6C",
             "#6A086A", "#680468", "#660066"]

function colorGetter(code) {
    var color = colors[0];
    for(var i = 0; i < state_porp.length; i++) {
        
        var state = state_porp[i].state;
        var state = state.toLowerCase();
        var porp = state_porp[i].porp;

        if(code == state) {
            if(porp < 0.02){
                return colors[0];
            }
            if(porp < 0.04){
                return colors[1];
            }
            if(porp < 0.06){
                return colors[2];
            }
            if(porp < 0.08){
                return colors[3];
            }
            if(porp < 0.10){
                return colors[4];
            }
            if(porp < 0.12){
                return colors[5];
            }
            if(porp < 0.14){
                return colors[6];
            }
            if(porp < 0.16){
                return colors[7];
            }
            if(porp < 0.18){
                return colors[8];
            }
            if(porp < 0.20){
                return colors[9];
            }
            if(porp < 0.22){
                return colors[10];
            }
            if(porp < 0.24){
                return colors[11];
            }
            if(porp < 0.26){
                return colors[12];
            }
            if(porp < 0.28){
                return colors[13];
            }
            if(porp < 0.30){
                return colors[14];
            }
            if(porp < 0.32){
                return colors[15];
            }
            if(porp < 0.34){
                return colors[16];
            }
            if(porp < 0.36){
                return colors[17];
            }
            if(porp < 0.38){
                return colors[18];
            }
            if(porp < 0.40){
                return colors[19];
            }
            if(porp < 0.42){
                return colors[20];
            }
            if(porp < 0.44){
                return colors[21];
            }
            if(porp < 0.46){
                return colors[22];
            }
            if(porp < 0.48){
                return colors[23];
            }
            if(porp < 0.50){
                return colors[24];
            }
            if(porp < 0.52){
                return colors[25];
            }
            if(porp < 0.54){
                return colors[26];
            }
            if(porp < 0.56){
                return colors[27];
            }
            if(porp < 0.58){
                return colors[28];
            }
            if(porp < 0.60){
                return colors[29];
            }
            if(porp < 0.62){
                return colors[30];
            }
            if(porp < 0.64){
                return colors[31];
            }
            if(porp < 0.66){
                return colors[32];
            }
            if(porp < 0.68){
                return colors[33];
            }
            if(porp < 0.70){
                return colors[34];
            }
            if(porp < 0.72){
                return colors[35];
            }
            if(porp < 0.74){
                return colors[36];
            }
            if(porp < 0.76){
                return colors[37];
            }
            if(porp < 0.78){
                return colors[38];
            }
            if(porp < 0.80){
                return colors[39];
            }
            if(porp < 0.82){
                return colors[40];
            }
            if(porp < 0.84){
                return colors[41];
            }
            if(porp < 0.86){
                return colors[42];
            }
            if(porp < 0.88){
                return colors[43];
            }
            if(porp < 0.90){
                return colors[44];
            }
            if(porp < 0.92){
                return colors[45];
            }
            if(porp < 0.94){
                return colors[46];
            }
            if(porp < 0.96){
                return colors[47];
            }
            if(porp < 0.98){
                return colors[48];
            }
            else {
                return colors[49]
            }
        }
    }
    return color;
        
        
}



function populateData(code){
    $(".childState").each(function () {
        $(this).remove();

    });
    for(var i = 0; i < all_bills.length; i++) {
        var state = all_bills[i].state;
        state = state.toLowerCase();
        var bill_name = all_bills[i].bill_name;
        var bill_summary = all_bills[i].bill_summary;
        var status = all_bills[i].status;
        var bill_url = all_bills[i].bill_url;
        var lastAction_date = all_bills[i].lastAction_date;
        var lastAction_main = all_bills[i].lastAction_main;
        if(code == state) {
            var state = state.toUpperCase();
            $("#billInfo").append("<div class='childState'><div class='card'><p><b>State: </b>"+state+"     <b>Bill: </b>"+bill_name+"</p><p><b>Last Action: </b>"+lastAction_main+" <b>Last Action Date: </b>"+lastAction_date+"</p><p><b>Summary: </b>"+bill_summary+"</p><a href="+bill_url+"  target='_blank'>More info</a></div></div>");
            
        }
        
    }
}

function populateNumber(code){
    $(".childNumb").each(function () {
        $(this).remove();

    });
    for(var i = 0; i < bill_numb.length; i++) {
        var state = bill_numb[i].state;
        state = state.toLowerCase();
        var count = bill_numb[i].n;

        if(code == state) {
            var state = state.toUpperCase();
            $("#billNumb").append("<div class='childNumb'><div class='cardNumber'><p><b>State:</b> "+state+"    <b>Number of Bills:</b> "+count+"</p></div></div>");
            
        }
        
    }
}




$(document).ready(function() {

//to get the json file loaded onto the javascript file
    $.ajax({
        type: 'GET',
        url: './data/bill_porp.json',
        dataType: 'json',
        success: function (data) {
            for(var i in data) {
                state_porp.push(data[i]);
            }
            jQuery('#vmap').vectorMap('set', 'colors', {
                ak: colorGetter("ak"),
                al: colorGetter("al"),
                az: colorGetter("az"),
                ar: colorGetter("ar"),
                ca: colorGetter("ca"),
                co: colorGetter("co"),
                ct: colorGetter("ct"),
                de: colorGetter("de"),
                fl: colorGetter("fl"),
                ga: colorGetter("ga"),
                hi: colorGetter("hi"),
                id: colorGetter("id"),
                il: colorGetter("il"),
                in: colorGetter("in"),
                ia: colorGetter("ia"),
                ks: colorGetter("ks"),
                ky: colorGetter("ky"),
                la: colorGetter("la"),
                me: colorGetter("me"),
                md: colorGetter("md"),
                ma: colorGetter("ma"),
                mi: colorGetter("mi"),
                mn: colorGetter("mn"),
                ms: colorGetter("ms"),
                mo: colorGetter("mo"),
                mt: colorGetter("mt"),
                ne: colorGetter("ne"),
                nv: colorGetter("nv"),
                nh: colorGetter("nh"),
                nj: colorGetter("nj"),
                nm: colorGetter("nm"),
                ny: colorGetter("ny"),
                nc: colorGetter("nc"),
                nd: colorGetter("nd"),
                oh: colorGetter("oh"),
                ok: colorGetter("ok"),
                or: colorGetter("or"),
                pa: colorGetter("pa"),
                ri: colorGetter("ri"),
                sc: colorGetter("sc"),
                sd: colorGetter("sd"),
                tn: colorGetter("tn"),
                tx: colorGetter("tx"),
                ut: colorGetter("ut"),
                vt: colorGetter("vt"),
                va: colorGetter("va"),
                wa: colorGetter("wa"),
                wv: colorGetter("wv"),
                wi: colorGetter("wi"),
                wy: colorGetter("wy")
            });

        },
        error: function (req, status, err) {
            console.log('ERROR loading data: ', err);
            alert("Thios NO");
        }
    });

});
jQuery(document).ready(function () {
    jQuery('#vmap').vectorMap({
        map: 'usa_en',
        backgroundColor: null,
        borderColor: '#818181',
        borderOpacity: 0.25,
        borderWidth: 3,
        color: '#d3d3d3',
        enableZoom: true,
        showTooltip: true,
        selectedColor: null,
        hoverColor: null,
        colors: {

        },
        onRegionClick: function(event, code, region){
            populateNumber(code);
            populateData(code);
            
        }
        });
  });

$(document).ready(function() {

//to get the json file loaded onto the javascript file
    $.ajax({
        type: 'GET',
        url: './data/bill_all.json',
        dataType: 'json',
        success: function (data) {
            for(var i in data) {
                all_bills.push(data[i]);
            }

            


        },
        error: function (req, status, err) {
            console.log('ERROR loading data: ', err);
            alert("Thios NO");
        }
    });

});


$(document).ready(function() {

//to get the json file loaded onto the javascript file
    $.ajax({
        type: 'GET',
        url: './data/bill_numb.json',
        dataType: 'json',
        success: function (data) {
            for(var i in data) {
                bill_numb.push(data[i]);
            }

            


        },
        error: function (req, status, err) {
            console.log('ERROR loading data: ', err);
            alert("Thios NO");
        }
    });

});

