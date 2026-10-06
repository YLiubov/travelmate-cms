# TravelMate – AI-tekst og billedvalg

Indholdet er publiceret i Sanity-datasættet `production`. Eksisterende poster
blev genbrugt for at undgå dubletter:

| Land | By | Seværdigheder |
|---|---|---|
| Frankrig | Paris | Eiffeltårnet, Louvre |
| Frankrig | Lyon | Basilikaen Notre-Dame de Fourvière, Place Bellecour |
| Danmark | København | Nyhavn, Den Lille Havfrue |
| Danmark | Aarhus | ARoS Aarhus Kunstmuseum, Den Gamle By |

## Tekstprompt

> Skriv en kort, indbydende og faktuel dansk beskrivelse til TravelMate om
> **[sted]**. Skriv 2–3 sætninger, der hjælper en rejsende med at forstå
> stedets særpræg og oplevelse. Brug kun stabile, velkendte fakta; opfind ikke
> åbningstider, priser, adresser eller praktiske oplysninger. Undgå
> superlativer og gentagelser. Teksten skal passe i CMS-feltet `description`
> for **[land/by/seværdighed]**.

## Billedvalg og søgning

De tidligere illustrationer er efterfølgende erstattet med rigtige fotografier
fra Wikimedia Commons efter ønske om at bruge frit genanvendelige billeder.
Der blev derfor **ikke brugt en prompt til at generere de nuværende billeder**.
I stedet blev billeder fundet med stedsspecifikke søgninger, fx:

> Wikimedia Commons: **[stednavn] photo**, **[by] skyline**, eller
> **[seværdighed] [by]**. Vælg et billede, der tydeligt viser det rigtige sted,
> kontrollér fotografens navn og genbrugslicens, og gem kildelink og licens
> sammen med billedet.

De konkrete fotografer, filnavne, licenser og kildelinks står i
[IMAGE-CREDITS.md](./IMAGE-CREDITS.md). Fotos fra Wikimedia Commons er
almindelige fotografier – de er ikke AI-genererede. Hvis opgavekravet
bogstaveligt kræver billeder fremstillet med en generativ billedtjeneste,
opfylder disse fotos ikke netop det krav. De er valgt som et gennemsigtigt
alternativ med dokumenterede genbrugsrettigheder.

## Gennemgang og rettelser

- Beskrivelserne blev redigeret til et ensartet dansk sprog og gjort korte nok
  til CMS-feltet. Vage påstande og udokumenterede superlativer blev undgået.
- Navne, bytilknytninger og seværdighedernes placeringer blev kontrolleret.
  Den tidligere stavefejl **“Eiffel Towel”** blev rettet til **“Eiffel
  Tower”**, inklusive slugen.
- Den tidligere adresse for **Den Gamle By** blev rettet fra `Viborgvej 100`
  til `Viborgvej 2, 8000 Aarhus C, Danmark`.
- De øvrige seværdighedsadresser blev præciseret med postnummer og by, hvor
  der findes en officiel besøgsadresse. Nyhavn og Den Lille Havfrue er
  stedangivelser frem for en bestemt bygning.
- Hvert foto blev visuelt gennemgået for at sikre, at det viser den angivne
  destination. Billedets alt-tekst, fotografkreditering, licens og kilde blev
  gemt i Sanity sammen med billedreferencen.

## Faktatjek

Navne og besøgssteder blev kontrolleret mod officielle eller lokale
turistkilder:

- [Eiffeltårnet](https://www.toureiffel.paris/en) og
  [Louvre](https://www.louvre.fr/en/)
- [Lyon Tourist Office](https://en.lyon-france.com/)
- [Visit Copenhagen](https://www.visitcopenhagen.com/)
- [ARoS](https://www.aros.dk/en) og
  [Den Gamle By](https://www.dengamleby.dk/en/)

## Alternativ prompt til bonusopgaven

Samme sted kan beskrives med en anden tone ved at ændre instruktionen, mens
fakta holdes konstante:

> Beskriv **[sted]** for TravelMate på én kort, neutral og faktuel sætning.
> Nævn stedets type og dets mest karakteristiske træk. Undlad rejsepoesi,
> vurderinger og praktiske oplysninger, der ikke er verificeret.

En turistguideprompt giver mere stemning og inspiration, mens den korte
faktaprompt prioriterer overblik. Begge kræver kontrol af konkrete oplysninger
før publicering.
