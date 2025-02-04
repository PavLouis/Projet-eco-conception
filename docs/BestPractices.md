❌ Non
🧢 Pas sur
✅ sur
| Numéro | Mesure | Utile  | Raison |
|:-------:|:-------:|:----:|:----:|
|1.| Éliminer les fonctionnalités non essentielles  | 🧢 | Site très petit |
|2.| Quantifier précisément le besoin  | 🧢 | Site très petit donc peut etre voir la qualité de la map ou des photos |
|3.| Optimiser le parcours utilisateur  | ✅ | Y'a pas grand chose sur le site donc pas d'idée mais oui |
|4.| Préférer la saisie assistée à l'autocomplétion  | ❌ | Pas de champs dans la maquette |
|5.| Favoriser un design simple, épuré, adapté au web  | ✅ | A lire, propose de faire le design en html css si faisable et d'autres points important |
|6.| Privilégier une approche "mobile first", à défaut un chargement adaptatif  | ✅ | Pas mal d'image a charger sur le site |
|7.| Respecter le principe de navigation rapide dans l’historique | ✅ | Permet au navigateur de cache la page si tt est bon peut se test sur chrome | . | 
|8.| Proposer un traitement asynchrone lorsque c'est possible | ❌ | Pas dans la maquette | . | 
|9.| Limiter le nombre de requêtes HTTP | ✅ | Le serveur choisit pour host va impacter ce choix (vercel, azure static web apps) | . | 
|10.| Stocker les données statiques localement | ✅ | Je pense aux images et logos | . | 
|11.| Favoriser un développement sur-mesure à l'usage d'un CMS | ❌ | Pas dans la maquette | . | 
|12.| EXISTE PAS | ❌ | EXISTE PAS | . | 
|13.| Favoriser les pages statiques | ✅ | On utilise vite build qui génére un site statique | . | 
|14.| Créer une architecture applicative modulaire | ✅ | Si y'a des components les réutiliser par exemple | . | 
|15.| Choisir les technologies les plus adaptées | ✅ | On utilise un site statique pour notre projet et pas wordpress par exemple | . | 
|16.| Utiliser certains forks applicatifs orientés "performance" | ❌ | Pas dans la maquette | . | 
|17.| Choisir un format de données adapté | ❌ | Sa a l'air d'etre pour une db | . | 
|18.| Limiter le nombre de domaines servant les ressources | ✅ | Si on utilise vercel, les assets sont servis depuis leur CDN opti, sous domaines configs automatiquelent et gestions cookies opti par défault | . | 
|19.| Remplacer les boutons officiels de partage des réseaux sociaux | 🧢 | Je suis pas vraiment sur mais peut etre utile j'imagine | . | 
|20.| EXISTE PAS | ❌ | EXISTE PAS | . | 
|21.| Découper les CSS | 🧢 | Mieux vaut tt avoir dans un seul fichier qui séparer avec des  @mediaquery | . | 
|22.| Limiter le nombre de CSS | ❌ | Plus a jour avec http/2 et bundle modern c'est + opti d'utiliser directement un seul fichier css avec des @mediaquery dedans | . | 
|23.| Préférer les CSS aux images | ✅ | Les coins arrondis, les bordures décorées, les effets de filtre des éléments doivent être gérés en CSS plutôt qu’avec des images. En gros pas d'utilisation d'une image d'un boutton arrondi | . | 
|24.| Écrire des sélecteurs CSS efficaces | ✅ | Privilégier les sélecteurs basés sur des ID ou des classes | . | 
|25.| Grouper les déclarations CSS similaires | ✅ | Lorsque plusieurs éléments du DOM (Document Object Model) ont des propriétés CSS communes, les déclarer ensemble dans le mm fichier | . | 
|26.| Utiliser les notations CSS abrégées | ✅ | Utiliser les notations CSS abrégées pour réduire le poids de la feuille de styles. (voir num pour exemple) | . | 
|27.| Fournir une CSS print | ✅ | faire un style pour l'impression (photocopie) en gros mais voir l'exemple pour + de détails | . | 
|28.| EXISTE PAS | ❌ | EXISTE PAS | . | 
|29.| Favoriser les polices standards | ✅ | Si possible favoriser celle de l'ordi du user sinon faut host la sienne + détails sur le git  | . | 
|30.| Préférer les glyphes aux images | 🧢 | Pertinent mais j'en ai pas vu sur la maquette | . | 
|31.| Valider les pages auprès du W3C | ✅ | Si page html pas bien faite, elle va devoir etre reformée dynamiquement | . | 
|32.| Externaliser les CSS et JavaScript | ✅ | Vite s'en occupe déjà | . | 
|33.| EXISTE PAS | ❌ | EXISTE PAS | . | 
|34.| Ne pas redimensionner les images coté navigateur | ✅ | Ne pas utiliser width et height sur l'image car dans tt les cas l'image va etre install a sa taille d'origine | . | 
|35.| Eviter d'utiliser des images matricielles pour l'interface | ✅ | J'ai un doute si y'a besoin mais peut etre pour les logos!!! vu qu'on peut les dl en svg (à voir) | . | 
|36.| Optimiser les images vectorielles | ✅ | réduction de sa taille en Ko | . | 
|37.| Utiliser le chargement paresseux | ✅ | Lazy loading pour les images!!!! | . | 
|38.| Utiliser le rechargement partiel d'une zone de contenu | ❌ | Pour moi pas besoin pour notre site vitrine | . | 
|39.| Éviter les animations JavaScript / CSS | 🧢 | Peut etre besoin pour le caroussel??? | . | 
|40.| N'utilisez que les portions indispensables des bibliothèques JavaScript et frameworks CSS | 🧢 | A étudier car j'ai rien compris | . | 
|41.| Ne pas faire de modification du DOM lorsqu’on le traverse | ❌ | Pas dans la maquette | . | 
|42.| Rendre les éléments du DOM invisibles lors de leur modification | 🧢 | Peut etre pertinent pour le caroussel | . | 
|43.| Réduire au maximum le repaint (appearence) et le reflow (layout) | 🧢 | Peut etre pertinent pour le caroussel | . | 
|44.| Utiliser la délégation d'évènements | 🧢 | Peut etre pertinent pour le caroussel | . | 
|45.| Modifier plusieurs propriétés CSS en 1 seule fois | 🧢 | Vraiment pas sur mais askip react s'en occupe voir ou on l'utilise peut etre caroussel | . | 
|46.| Valider votre code avec un Linter | ✅ | utilisation de EsLINT | . | 
|49.| Mettre en cache les objets souvent accédés en JavaScript | ❌ | Peut etre interessant pour des calculs ou des fonctions qui coute | . | 
|54.| Réduire les accès au DOM via JavaScript | ✅ | Normalement react s'en occupe déjà | . | 
|57.| Utiliser tous les niveaux de cache du CMS | ✅ | Alors on utilise pas de CMS mais on va surement use workbox | . | 
|58.| Optimiser et générer les médias avant importation sur un CMS | ✅ | Utilisation de sharp pour opti les images et les mettres en webp si besoin | . | 
|60.| Encoder les sons en dehors du CMS | ❌ | Pas dans la maquette | . | 
|64.| Mettre en cache les données calculées souvent utilisées | ❌ | Je pense pas | . | 
|70.| Supprimer tous les warnings et toutes les notices | ✅ | console log et respect du eslint | . | 
|72.| Éviter d'effectuer des requêtes SQL à l’intérieur d’une boucle | ❌ | Pas dans la maquette | . | 
|73.| Ne se connecter à une base de données que si nécessaire | ❌ | Pas dans la maquette | . | 
|75.| Optimiser les requêtes aux bases de données | ❌ | Pas dans la maquette | . | 
|76.| Éviter le transfert d'une grande quantité de données pour réaliser un traitement | ❌ | Pas dans la maquette | . | 
|77.| Minifier les fichiers CSS, JavaScript, HTML et SVG | ✅ | Vite s'occupe des fichiers html et css mais pas des svg faut utiliser vite-plugin-svg-optimizer | . | 
|78.| Compresser les fichiers CSS, JavaScript, HTML et SVG | ✅ | Vercel s'en occupe déjà pour tt types de fichiers (html, css, svg et webp) | . | 
|79.| Combiner les fichiers CSS et JavaScript | ✅ | Vite s'en occupe lors du build | . | 
|80.| Optimiser les image | ✅ | Mettre les images en webp si possible et rajouter une image fallback au cas ou pour IE11 | . | 
|82.| Optimiser la taille des cookies | ❌ | Pas dans la maquette | . | 
|84.| Favoriser HSTS Preload list aux redirections 301 | ❌ | Pas dans la maquette | . | 
|85.| Mettre en place un plan de fin de vie du site | ✅ | Sauvegarde des données, documentation procédures et nettoyage | . | 
|86.| Choisir un hébergeur "éco-responsable" | ✅ | Vercel utilise amazon et microsoft et normalement ils ont un bon PUE < 1.5 | . | 
|87.| Privilégier un fournisseur d'électricité écoresponsable | 🧢 | Que faire? | . | 
|88.| Adapter la qualité de service et le niveau de disponibilité | 🧢 | En gros ne pas choisir un site avec un SLA de 99% | . | 
|89.| Utiliser des serveurs virtualisés | ❌ | Pas dans la maquette | . | 
|90.| Optimiser l'efficacité énergétique des serveurs | ❌ | Pas dans la maquette | . | 
|91.| Installer le minimum requis sur le serveur | ❌ | Pas dans la maquette | . | 
|92.| Mettre les caches entièrement en RAM (opcode et kvs) | ❌ | Pas dans la maquette | . | 
|93.| Stocker les données dans le cloud | ❌ | Pas dans la maquette | . | 
|94.| Héberger les ressources (CSS/JS) sur un domaine sans cookie | ❌ | Pas dans la maquette | . | 
|95.| Éviter les redirections | ❌ | Pas dans la maquette | . | 
|96.| Afficher des pages d'erreurs statiques | ✅ | Ajouter dans public 404.html ou error.html | . | 
|97.| Utiliser un serveur asynchrone | ❌ | Pas dans la maquette | . | 
|98.| Utiliser un CDN | ✅ | Vercel en utilise super perfomant | . | 
|99.| Utiliser un cache HTTP | ✅ | Vercel s'en occupe | . | 
|101.| Ajouter des entêtes Expires ou Cache-Control | ✅ | Vercel s'en occupe mais on peut les config si besoin | . | 
|102.| Mettre en cache les réponses AJAX | ❌ | Pas dans la maquette | . | 
|103.| Réduire au nécessaire les logs des serveurs | ❌ | Pas dans la maquette | . | 
|104.| Désactiver le DNS lookup d’Apache | ❌ | Pas dans la maquette | . | 
|105.| Apache Vhost : désactiver le AllowOverride | ❌ | Pas dans la maquette | . | 
|106.| Désactiver les logs binaires | ❌ | Pas dans la maquette | . | 
|107.| Compresser les documents | ❌ | Pas dans la maquette | . | 
|108.| Optimiser les PDF | ❌ | Pas dans la maquette | . | 
|109.| Limiter les e-mails lourds et redondants | ❌ | Pas dans la maquette | . | 
|110.| N'utiliser que des fichiers double opt-in | ❌ | Pas dans la maquette | . | 
|111.| Limiter la taille des e-mails envoyés | ✅ | Si on doit envoyer un mail = pertinent | . | 
|112.| Adapter les sons aux contextes d'écoute | ❌ | Pas dans la maquette | . | 
|113.| Adapter les textes au web | ✅ | Vérifier que sur la maquette le texte est concis | . | 
|114.| Adapter les vidéos aux contextes de visualisation | ❌ | Pas dans la maquette | . | 
|4001.| Limiter les outils d'analytics et les données collectées | ❌ | Pas dans la maquette | . | 
|4002.| Limiter l'utilisation des GIFs animés | ❌ | Pas dans la maquette | . | 
|4003.| Éviter la lecture et le chargement automatique des vidéos et des sons | ❌ | Pas dans la maquette | . | 
|4004.| Utiliser les compartiments CSS |🧢 | Ne semble pas pertinent pour un petit projet comme le notre | . | 
|4005.| Fournir une alternative textuelle aux contenus multimédias | ❌ | Pas dans la maquette | . | 
|4006.| Privilégier HTTP/2 à HTTP/1 | ✅ | Vercel s'en occupe déjà | . | 
|4007.| Économiser de la bande passante grâce à un Service Worker | ✅ | a mettre en place | . | 
|4008.| Mettre en place un sitemap efficient | ✅ | A mettre en place | . | 
|4009.| Assurer la compatibilité avec les plus anciens appareils et logiciels du parc | ✅ | Voir pour IE11 | . | 
|4011.| Réduire le volume de données stockées au strict nécessaire | ❌ | Pas dans la maquette | . | 
|4012.| Mettre en place une politique d'expiration et suppression des données | ❌ | Pas dans la maquette | . | 
|4013.| Limiter le recours aux canvas | ❌ | Pas dans la maquette | . | 
|4014.| assurer que les parcours utilisateurs permettent de réaliser leur action prévue | ✅ | On a que 1 chemin sur le site | . | 
|4015.| Avoir un titre de page et une metadescription pertinents avec le contenu de la page | ✅ | A vérifier | . | 
|4016.| Utiliser la version la plus récente du langage | ✅ | On utilise dernière version de js | . | 
|4017.| Ne charger des données/du code que lorsqu'elles sont/il est nécessaire | ❌ | Pas dans la maquette | . | 
|4018.| Éliminer les fonctionnalités non utilisées | ❌ | Pas dans la maquette | . | 
|4019.| Préférer une PWA à une application mobile native similaire au site web | ✅ | Parfait dans notre cas | . | 
|4020.| Éviter les temps de blocages par des traitements JavaScript trop longs | ❌ | Normalement pas concernés | . | 
|4021.| Mettre en place une architecture élastique | ✅ | Vercel gère la scalabilité | . | 
|4022.| Limiter le nombre d'appels aux API HTTP | ❌ | Pas dans la maquette | . | 
|4030.| Limiter le recours aux carrousels | ✅ | Utilisation d'une alternative | . | 
|4031.| Avoir une stratégie de fin de vie des contenus | 🧢 | Pas trop sur d'avoir compris | . | 
|4032.| Mettre en place un "Circuit breaker" | ❌ | Pas dans la maquette | . | 
|4033.| Favoriser le "Request collapsing" | ❌ | Pas dans la maquette | . | 
|4034.| S’appuyer sur les services managés | 🧢 | A voir une fois le code fait | . | 
|4035.| Préférer la pagination au défilement infini | ❌ | Pas dans la maquette | . | 
|4036.| Entretenir son site régulièrement | ❌ | Pas dans la maquette | . | 
|4037.| Bien choisir son thème et limiter le nombre d'extensions dans un CMS | ❌ | Pas dans la maquette | . | 
|4038.| Sécuriser l'accès à l'administration | ✅ | Github + app sur vercel | . | 
|4039.| Ne pas afficher les documents à l'intérieur des pages | ❌ | Pas dans la maquette | . | 