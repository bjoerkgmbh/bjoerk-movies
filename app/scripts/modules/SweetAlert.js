import $ from 'jquery';

class SweetAlert {
  constructor() {
    this.renderModals();
  }

  isMobile() {
    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
    return isMobile;
  }

  renderModals() {
    var touchType = '';
    if (this.isMobile()) {
      touchType = 'touchend';
    }
    else {
      touchType = 'click';
    }
    console.log(touchType);
    $('#ausbildungsfilm_btn').on(touchType, function () {
      swal({
        title: 'Ausbildungsfilm',
        type: 'error',
        text: `Begeistern Sie! Authentisch und auf Augenhöhe – Azubis stellen ihren Ausbildungsberuf vor, dort, wo sie ausgebildet werden.
        Live und ohne Drehbuch. Möchte man neue Ausbildungs-Kandidaten für das eigene Unternehmen begeistern, geht es
        kaum effizienter als mit dem modernen Akquise-Instrument E-Recruiting. Und wenn Sie es wünschen, ließen sich
        die Softskills Ihres Unternehmens gezielt mit einflechten.`,
        showConfirmButton: false,
        padding: 50
      }).catch(swal.noop);
      $('.swal2-icon.swal2-error').on(touchType, function() {
        swal.close();
      });
    });

    $('#produktfilm_btn').on(touchType, function () {
      swal({
        title: 'Produktfilm',
        type: 'error',
        text: `Verlocken Sie! Wecken Sie Lust, das Produkt zu verwenden. Zeigen Sie es von allen und von seiner besten Seite. Zeigen sie
        seine Vorteile, seinen Nutzen und seine Verwendung. How-to-do: Häufig erklärt sich ein Sachverhalt, den begreiflich
        zu machen, es mitunter langer textlicher Erläuterungen bedürfte, in bewegten Bildern von allein. Dank des Mediums
        Film geht das schnell, umfassend und spannend. Verlockend oder?`,
        showConfirmButton: false,
        padding: 50
      }).catch(swal.noop);
      $('.swal2-icon.swal2-error').on(touchType, function() {
        swal.close();
      });
    });

    $('#imagefilm_btn').on(touchType, function () {
      swal({
        title: 'Imagefilm',
        type: 'error',
        html: `Inspirieren Sie! In aller Kürze soll der Imagefilm eine Marke, ein Unternehmen, eine Musikgruppe oder eine (berühmte) Persönlichkeit
        portraitieren. Aus Sicht des Auftraggebers könnte der Film gerne zehn Minuten lang sein, aus Sicht seiner Kunden
        anderthalb und aus unserer Sicht: Auch anderthalb! Weil der Kunde es so will und man ihn dadurch am besten erreicht.
        Und nicht weil wir nicht gerne Filme in Spielfilmlänge drehen würden. Als sinnvoller Kompromiss könnte sich die
        Aufteilung nach Sinneinheiten (z. B. Tätigkeitsfelder, Abteilungen oder Zielgruppen) erweisen.
        <br><br>
        Vier Filme à 1:30 Minuten erreichen häufig einen deutlich besseren Wirkungsgrad als einer mit sechs Minuten Länge. Je nachdem,
        ob der Imagefilm stärker auf Informationsvermittlung oder auf Imagebildung abzielen soll, wird er eher informativ
        oder eher suggestiv angelegt. Beides zu etwa gleichen Teilen zu kombinieren, weil man ja irgendwie auch beides
        abdecken möchte, gelingt nur selten, denn der Betrachter legt seine Erwartungshaltung im Vorwege fest und würde
        dann in beiden Fällen enttäuscht. Entweder ist ihm der Informationsgehalt zu dürftig oder er empfindet die Dramaturgie
        als zu öde. Dilemma: Auf Unternehmensseite liegt die Präferenz meist auf Informationsvermittlung, während der
        Kunde eher inspirierend verpackte Botschaften honoriert.`,
        showConfirmButton: false,
        padding: 50
      }).catch(swal.noop);
      $('.swal2-icon.swal2-error').on(touchType, function() {
        swal.close();
      });
    });

    $('#veranstaltungsdokumentation_btn').on(touchType, function () {
      swal({
        title: 'Veranstaltungs-dokumentation',
        type: 'error',
        text: `Laden Sie ein! Es kann ein Messefilm sein. Oder ein Eventfilm. Oder ein Konferenzfilm. Immer kann er berichten. Die Stimmung
        widerspiegeln. Dokumentieren. Den Glanz, den Eifer oder die Angespanntheit. Wir befragen die Besucher nach ihren
        Eindrücken. Die Atmosphäre lebt wieder auf. Für alle, die dabei waren. Oder eben gerade nicht.`,
        showConfirmButton: false,
        padding: 50
      }).catch(swal.noop);
      $('.swal2-icon.swal2-error').on(touchType, function() {
        swal.close();
      });
    });

    $('#interviews_btn').on(touchType, function () {
      swal({
        title: 'Interviews',
        type: 'error',
        text: `Erzählen Sie! Aktuelles, Hintergründiges, Bewegendes oder Unterhaltsames. Ob zur Person, Sache oder Meinung, ob als redaktioneller
        Beitrag oder In-Home Interview, ob ein Fachmann seine Kenntnisse weitergibt (Expertenbefragung) oder man Passanten
        im Einkaufscenter (Mall-Intercept-Interview) um deren Meinung zu einem konsumierten Produkt bittet ¬– Interviews
        sind flexibel, persönlich, interaktiv und informativ. So nah dran wie möglich. Machen wir gerne.`,
        showConfirmButton: false,
        padding: 50
      }).catch(swal.noop);
      $('.swal2-icon.swal2-error').on(touchType, function() {
        swal.close();
      });
    });

    $('#animationsfilm_btn').on(touchType, function () {
      swal({
        title: 'Animationsfilm',
        type: 'error',
        text: `Erklären Sie! Ob spezielle, schwer nachvollziehbare oder komplexe Themen: dafür eignen sich Animationsfilme, je nach Budget
        als 2D- oder 3D-Variante. Sie machen das anschaulich, was in der realen Welt – wenn überhaupt – nur mit äußersten
        Anstrengungen möglich wäre. Ob als How-To-Do-Film, experimentelle Animation, Keyframe- oder aktionsbasierte Animation.
        Ob übertrieben, real oder fiktiv – hier ist alles erlaubt.`,
        showConfirmButton: false,
        padding: 50
      }).catch(swal.noop);
      $('.swal2-icon.swal2-error').on(touchType, function() {
        swal.close();
      });
    });

    $('#datenschutz_btn').on(touchType, function () {
      swal({
        title: 'Datenschutz',
        type: 'error',
        text: `In Verbindung mit Ihrem Seitenaufruf werden auf unserem Server durch die Webanalyse-Software vorübergehend Daten gespeichert,
        die uns Aufschluss über die Nutzung unserer Seite geben. Dabei wird ein sogenannter Cookie übergeben, der temporär
        gespeichert wird und anonym Angaben zu Ihrem Besuch übermittelt (zum Beispiel IP-Adresse, Datum, Uhrzeit, betrachtete
        Seiten, verwendeter Browser und Betriebssystem). Eine Weiterverarbeitung dieser Daten erfolgt nicht, die Weitergabe
        an Dritte ist ausgeschlossen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer
        Browser Software verhindern. Wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
        Funktionen dieser Website nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung
        der über Sie erhobenen Daten in der beschriebenen Art und Weise und zu dem benannten Zweck einverstanden.`,
        showConfirmButton: false,
        padding: 50
      }).catch(swal.noop);
      $('.swal2-icon.swal2-error').on(touchType, function() {
        swal.close();
      });
    });

    $('#impressum_btn').on(touchType, function () {
      swal({
        title: 'Impressum',
        type: 'error',
        html: `<p style="text-align: center;">
        Anders Björk GmbH, Ideenjäger<br> Hafenstraße 35, 23568 Lübeck<br> Vertretungsberechtigte Geschäftsführer:<br>            Andreas Trumpler, Martin Mehl<br>
      </p>
      <p style="text-align: center;">
        Registergericht: Amtsgericht Lübeck<br> Registernummer: HRB 4571<br> Umsatzsteuer-Identifikationsnummer gemäß<br>§
        27 a Umsatzsteuergesetz: DE 199880863<br>
      </p>
      <p style="text-align: center;">
        Inhaltlich Verantwortlicher gemäß § 10 Absatz 3<br> MDStV: Geschäftsführung Anders Björk, s.o.<br>
      </p>
      <p style="text-align: center;">Copyright</p>
      <p>Sämtliche Inhalte dieser Website sind urheberrechtlich geschützt. Jede auszugsweise Nutzung bedarf der schriftlichen
        Genehmigung der Anders Björk GmbH. Die Seiten dürfen nur zum persönlichen Gebrauch kopiert oder ausgedruckt,
        Änderungen nicht vorgenommen und Vervielfältigungsstücke ohne unsere Genehmigung weder verbreitet noch zu öffentlichen
        Wiedergaben benutzt werden. Alle Informationen in diesem Angebot erfolgen ohne Gewähr für ihre Richtigkeit. Wir
        schließen die Haftung für Schäden aus, die sich direkt oder indirekt aus der Verwendung der Website und der darin
        enthaltenen Informationen ergeben können. Wir übernehmen ferner keine Haftung für die Inhalte anderer Websites,
        die Sie über Hyperlinks von www.bjoerk.de aus besuchen können. Hierbei handelt es sich um fremde Angebote, auf
        deren inhaltliche Gestaltung wir keinen Einfluss haben. Sollten Sie Kenntnis von rechtswidrigen Inhalten von
        Websites anderer Anbieter erhalten, die Sie über unser Angebot per Hyperlink besuchen können, bitten wir um einen
        Hinweis, damit wir den Verweis auf das entsprechende Angebot aufheben können.
      </p>`,
        showConfirmButton: false,
        padding: 50
      }).catch(swal.noop);
      $('.swal2-icon.swal2-error').on(touchType, function() {
        swal.close();
      });
    });
  }
}

export default SweetAlert;
