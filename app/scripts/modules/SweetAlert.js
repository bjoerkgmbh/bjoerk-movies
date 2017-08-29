import $ from 'jquery';

class SweetAlert {
  constructor() {
    this.renderModals();
  }

  renderModals() {
    $('#ausbildungsfilm_btn').on('click touchstart', function () {
      swal({
        title: 'Ausbildungsfilm',
        type: 'error',
        text: `Begeistern Sie! Authentisch und auf Augenhöhe – Azubis stellen ihren Ausbildungsberuf vor, dort, wo sie ausgebildet werden.
        Live und ohne Drehbuch. Möchte man neue Ausbildungs-Kandidaten für das eigene Unternehmen begeistern, geht es
        kaum effizienter als mit dem modernen Akquise-Instrument E-Recruiting. Und wenn Sie es wünschen, ließen sich
        die Softskills Ihres Unternehmens gezielt mit einflechten.`,
        showConfirmButton: false,
        /* animation: false,
        customClass: 'animated bounce' */
        padding: 50
      }).catch(swal.noop);
      $('.swal2-icon.swal2-error').on('click touchstart', function() {
        swal.close();
      });
    });

    $('#produktfilm_btn').on('click touchstart', function () {
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
      $('.swal2-icon.swal2-error').on('click touchstart', function() {
        swal.close();
      });
    });

    $('#imagefilm_btn').on('click touchstart', function () {
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
      $('.swal2-icon.swal2-error').on('click touchstart', function() {
        swal.close();
      });
    });

    $('#veranstaltungsdokumentation_btn').on('click touchstart', function () {
      swal({
        title: 'Veranstaltungs-dokumentation',
        type: 'error',
        text: `Laden Sie ein! Es kann ein Messefilm sein. Oder ein Eventfilm. Oder ein Konferenzfilm. Immer kann er berichten. Die Stimmung
        widerspiegeln. Dokumentieren. Den Glanz, den Eifer oder die Angespanntheit. Wir befragen die Besucher nach ihren
        Eindrücken. Die Atmosphäre lebt wieder auf. Für alle, die dabei waren. Oder eben gerade nicht.`,
        showConfirmButton: false,
        padding: 50
      }).catch(swal.noop);
      $('.swal2-icon.swal2-error').on('click touchstart', function() {
        swal.close();
      });
    });

    $('#interviews_btn').on('click touchstart', function () {
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
      $('.swal2-icon.swal2-error').on('click touchstart', function() {
        swal.close();
      });
    });

    $('#animationsfilm_btn').on('click touchstart', function () {
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
      $('.swal2-icon.swal2-error').on('click touchstart', function() {
        swal.close();
      });
    });

    $('#datenschutz_btn').on('click touchstart', function () {
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
      $('.swal2-icon.swal2-error').on('click touchstart', function() {
        swal.close();
      });
    });

    $('#impressum_btn').on('click touchstart', function () {
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
      $('.swal2-icon.swal2-error').on('click touchstart', function() {
        swal.close();
      });
    });
  }
}

export default SweetAlert;
