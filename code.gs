function onOpen(event) {
  SlidesApp.getUi().createAddonMenu()
      .addItem('Open', 'showSidebar')
      .addToUi();
}

function onInstall(event) {
  onOpen(event);
}

function showSidebar() {
  const ui = HtmlService
      .createHtmlOutputFromFile('sidebar')
      .setTitle('AutoDeck Initialization');
  SlidesApp.getUi().showSidebar(ui);
}

function generateDeck(prompt) {
  var apiKey = API-KEY-HERE;
  var endpoint = "https://api.openai.com/v1/engines/text-davinci-003/completions";
  var payload = {
    "prompt": prompt,
    "temperature": 0.5,
    "max_tokens": 2500,
    "frequency_penalty": 0.5,
    "presence_penalty": 0.5,
  };

  var options = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey
    },
    "payload": JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', options,);
  var result = JSON.parse(response.getContentText())['choices'][0]['text'];
  createTitles(result)
}

function devBar() {
  const ui = HtmlService
    .createHtmlOutputFromFile('devbar')
    .setTitle('AutoDeck Development');
  SlidesApp.getUi().showSidebar(ui);
}

function createTitles(result){
  const obj = JSON.parse(result);
  const titles = Object.keys(obj);
  var slide = SlidesApp.getActivePresentation().getSlides()[0];
  var title_box = slide.getPageElements()[0];
  title_box.asShape().getText().setText(titles[0]);
  for (let i = 1 ; i<titles.length; i++){
    createSlides(obj, titles, i)
  }
}

function createSlides(obj, titles, i){
  var subtitles = Object.keys(obj[titles[i]]);
  var body_len = subtitles.length;

  /*
  var layouts = [SlidesApp.SlideLayout.TITLE_AND_TWO_COLUMNS, SlidesApp.SlideLayout.TITLE_AND_TWO_COLUMNS, SlidesApp.SlideLayout.TITLE_AND_TWO_COLUMNS, SlidesApp.SlideLayout.TITLE_AND_TWO_COLUMNS, SlidesApp.SlideLayout.CHART, SlidesApp.SlideLayout.TABLE];

  //^ list of layouts that we can choose from using a random number generator

  var layout_index = Math.floor(Math.random() * 6)
  SlidesApp.getActivePresentation().appendSlide(layouts[layout_index]);*/

  SlidesApp.getActivePresentation().appendSlide(SlidesApp.PredefinedLayout.TITLE_ONLY);

  var slide = SlidesApp.getActivePresentation().getSlides()[i]

  var title = slide.getPageElements()[0];
  title.asShape().getText().setText(titles[i]);

  for (let j = 0 ; j<body_len; j++){
    var body_height = 400/(body_len+2)
    var descript = obj[titles[i]][subtitles[j]];
    var textbox = slide.insertTextBox(descript)
                  .setLeft(50)
                  .setTop(body_height*(j+1)+50)
                  .setWidth(400)
    var textbox = textbox.getText().getTextStyle().setFontSize(16)
    //text.getListStyle().applyListPreset(SlidesApp.ListPreset.DISC_CIRCLE_SQUARE);

  }
}




