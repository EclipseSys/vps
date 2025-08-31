"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Users,
  Zap,
  Key,
  Globe,
  Mail,
  HardDrive,
  Cpu,
  MemoryStick,
  Loader2,
  Sparkles,
  Shield,
  Server,
  ArrowRight,
  CheckCircle,
  Github,
  Star,
  Rocket,
} from "lucide-react"

export default function VPSInitiativePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [githubStars, setGithubStars] = useState<number | null>(null)
  const [language, setLanguage] = useState("en")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    githubProfile: "",
    vpsType: "",
    purpose: "",
    ipv4: "",
    ipv6: "",
    wireguardConfig: "",
    sshKey: "",
    agreeToTerms: false,
  })

  const translations = {
    en: {
      title: "Free VPS That Actually Works",
      subtitle:
        "Professional VPS hosting that costs exactly $0.00 (we checked the math twice). Just bring your IPv4 and SSH keys - we'll handle the rest while our pixel cat mascot supervises.",
      getVPS: "Get My Free VPS",
      showGoods: "Show Me The Goods",
      blazingFast: "Blazingly Fast",
      blazingDesc: "Enterprise E5-2600v4 processors that go zoom (up to 3.4GHz max)",
      fortKnox: "Fort Knox Secure",
      fortKnoxDesc: "SSH keys only - passwords are so 1995",
      actuallyFree: "Actually Free",
      actuallyFreeDesc: 'No hidden fees, no "gotchas", no selling your data to aliens',
      pickFighter: "Pick Your Fighter",
      reliable: "The Reliable",
      overkill: "The Overkill",
      boostClockNote: "* Boost clock speeds may vary based on workload and thermal conditions",
      privacyTerms: "I agree to the Privacy Policy and Terms of Service",
      githubProfile: "GitHub Profile (Optional)",
      // Additional translations
      serverConfigurations: "Server Configurations",
      bothOptionsOverpowered: "Both options are ridiculously overpowered for most projects (but hey, why not?)",
      perfectForMostThings: "Perfect for Most Things",
      greatForWebApps: "Great for web apps, APIs, and impressing your friends with your \"server\"",
      when2GBNotEnough: "When 2GB Just Isn't Enough",
      forDatabasesHeavyApps: "For databases, heavy apps, and when you want to feel fancy",
      finePrintTitle: "The Fine Print (But Actually Important)",
      finePrintText: "We might say \"no\" if you want to mine crypto or host your collection of 4K cat videos. Limited stock means limited stock - first come, first served! We reserve the right to suggest alternatives if your project needs something different (like therapy for wanting to run Crysis on a VPS).",
      platformFeatures: "Platform Features",
      whyWereAwesome: "Why We're Actually Awesome",
      professionalInfrastructure: "Professional infrastructure that doesn't cost your firstborn child",
      seriouslyFree: "Seriously Free",
      seriouslyFreeDesc: "No credit card, no \"free trial\", no surprise bills. We're not even asking for your soul (yet).",
      coolDeveloperFriends: "Cool Developer Friends",
      coolDeveloperFriendsDesc: "Join our community of developers who also can't believe this is actually free.",
      bankLevelSecurity: "Bank-Level Security",
      bankLevelSecurityDesc: "SSH keys, WireGuard tunnels, and enterprise-grade paranoia included at no extra cost.",
      requirements: "Requirements",
      whatYouNeedToBring: "What You Need to Bring",
      justAFewThings: "Just a few things (we're not asking for much, promise)",
      networkSetup: "Network Setup",
      internetStuffYouNeed: "The internet stuff you need",
      yourOwnIPv4: "Your own IPv4 address (required - we're not IP dealers)",
      ipv6Optional: "IPv6 address (optional, but cool if you have it)",
      wireguardConfigRoute: "WireGuard config (route that IP through us, please)",
      workingInternetConnection: "Actually working internet connection",
      sshAuthentication: "SSH Authentication",
      digitalKeysToKingdom: "Your digital keys to the kingdom",
      sshKeyPair: "SSH key pair (RSA, ECDSA, or Ed25519 - we're not picky)",
      publicKeyForSetup: "Public key for us to set up",
      keepPrivateKeyPrivate: "Keep your private key private (seriously)",
      noPasswords: "No passwords (this isn't 2005)",
      getStarted: "Get Started",
      readyToGetFreeVPS: "Ready to Get Your Free VPS?",
      fillOutForm: "Fill out this form and we'll hook you up faster than you can say \"enterprise-grade infrastructure\"",
      vpsApplication: "VPS Application (The Fun Part)",
      tellUsAboutProject: "Tell us about your project (and convince us you're not planning world domination)",
      aboutYou: "About You (The Human)",
      fullName: "Full Name",
      fullNamePlaceholder: "Your actual name (not your GitHub username)",
      emailAddress: "Email Address",
      emailPlaceholder: "your.email@notspam.com",
      organizationInstitution: "Organization/Institution",
      organizationPlaceholder: "Your school, company, or 'Bedroom Startup Inc.'",
      yourAwesomeProject: "Your Awesome Project",
      vpsConfiguration: "VPS Configuration",
      chooseWeapon: "Choose your weapon of choice",
      standardReliable: "The Reliable (2GB RAM, 6vCores, 100GB)",
      performanceOverkill: "The Overkill (4GB RAM, 6vCores, 100GB)",
      mightSuggestDifferent: "We might suggest something different if your project has special needs",
      projectDescription: "Project Description",
      projectDescriptionPlaceholder: "Tell us about your project! What are you building? Is it the next Facebook? A simple blog? A machine learning model to predict cat behavior? The more details, the better we can help you succeed.",
      networkStuff: "Network Stuff (The Technical Bits)",
      ipv4Address: "IPv4 Address",
      ipv4Placeholder: "192.168.1.100",
      ipv4Description: "Your IPv4 that actually works on the internet",
      ipv6Address: "IPv6 Address",
      optional: "(Optional)",
      ipv6Placeholder: "2001:db8::1",
      ipv6Description: "IPv6 if you're living in the future",
      wireguardConfiguration: "WireGuard Configuration",
      wireguardPlaceholder: "[Interface]\nPrivateKey = your-private-key-here\nAddress = 10.0.0.x/24\n\n[Peer]\nPublicKey = server-public-key-here\nEndpoint = your.endpoint.com:51820\nAllowedIPs = 0.0.0.0/0",
      wireguardDescription: "Your WireGuard config so we can route your IP properly",
      sshKeys: "SSH Keys (Your Digital ID)",
      sshPublicKey: "SSH Public Key",
      sshPlaceholder: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQ... your-email@example.com\n\n(Paste your PUBLIC key here - the one that starts with ssh-rsa, ssh-ed25519, etc. NOT your private key!)",
      sshDescription: "Your SSH PUBLIC key (seriously, don't paste your private key here - we'll both regret it)",
      agreeToDataHandling: "By checking this box, you agree to our data handling practices and service terms.",
      launchingDreams: "Launching Your Dreams...",
      launchMyFreeVPS: "Launch My Free VPS! 🚀",
      makingHostingAccessible: "Making professional hosting accessible to everyone (and their pet projects).",
      resources: "Resources",
      documentation: "Documentation",
      gettingStarted: "Getting Started",
      sshSetupGuide: "SSH Setup Guide",
      wireguardTutorial: "WireGuard Tutorial",
      community: "Community",
      discordServer: "Discord Server",
      github: "GitHub",
      statusPage: "Status Page",
      support: "Support",
      starUsOnGithub: "Star us on GitHub",
      copyright: "© 2025 Eclipse Systems VPS Initiative. Powered by caffeine, good intentions, and a sleeping pixel cat.",
      launchProject: "Launch Project",
      vpsInitiative: "VPS Initiative",
      freeVPSNoReally: "Free VPS (No, Really!)",
      // Legal documents
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      // Alert messages
      pleaseAgreeToTerms: "Please agree to the Privacy Policy and Terms of Service to continue.",
      applicationSubmitted: "Application submitted successfully! We'll review it within 24-48 hours.",
      failedToSubmit: "Failed to submit application. Please try again.",
    },
    de: {
      title: "Kostenloser VPS Der Tatsächlich Funktioniert",
      subtitle:
        "Professionelles VPS-Hosting das genau 0,00€ kostet (wir haben die Rechnung zweimal überprüft). Bring einfach deine IPv4 und SSH-Schlüssel mit - wir kümmern uns um den Rest während unser Pixel-Katzen-Maskottchen überwacht.",
      getVPS: "Hol Dir Meinen Kostenlosen VPS",
      showGoods: "Zeig Mir Die Waren",
      blazingFast: "Blitzschnell",
      blazingDesc: "Enterprise E5-2600v4 Prozessoren die zoomen (bis zu 3,4GHz max)",
      fortKnox: "Fort Knox Sicher",
      fortKnoxDesc: "Nur SSH-Schlüssel - Passwörter sind so 1995",
      actuallyFree: "Wirklich Kostenlos",
      actuallyFreeDesc: 'Keine versteckten Gebühren, keine "Haken", kein Verkauf deiner Daten an Aliens',
      pickFighter: "Wähle Deinen Kämpfer",
      reliable: "Der Zuverlässige",
      overkill: "Der Overkill",
      boostClockNote: "* Boost-Taktfrequenzen können je nach Arbeitsbelastung und thermischen Bedingungen variieren",
      privacyTerms: "Ich stimme der Datenschutzrichtlinie und den Nutzungsbedingungen zu",
      githubProfile: "GitHub-Profil (Optional)",
      // Additional translations
      serverConfigurations: "Server-Konfigurationen",
      bothOptionsOverpowered: "Beide Optionen sind lächerlich überdimensioniert für die meisten Projekte (aber hey, warum nicht?)",
      perfectForMostThings: "Perfekt für die meisten Dinge",
      greatForWebApps: "Großartig für Web-Apps, APIs und um deine Freunde mit deinem \"Server\" zu beeindrucken",
      when2GBNotEnough: "Wenn 2GB einfach nicht reichen",
      forDatabasesHeavyApps: "Für Datenbanken, schwere Apps und wenn du dich fancy fühlen willst",
      finePrintTitle: "Das Kleingedruckte (Aber Eigentlich Wichtig)",
      finePrintText: "Wir könnten \"Nein\" sagen, wenn du Krypto schürfen oder deine Sammlung von 4K-Katzenvideos hosten willst. Begrenzter Vorrat bedeutet begrenzter Vorrat - wer zuerst kommt, mahlt zuerst! Wir behalten uns das Recht vor, Alternativen vorzuschlagen, wenn dein Projekt etwas anderes braucht (wie Therapie dafür, dass du Crysis auf einem VPS laufen lassen willst).",
      platformFeatures: "Plattform-Features",
      whyWereAwesome: "Warum wir wirklich toll sind",
      professionalInfrastructure: "Professionelle Infrastruktur, die nicht dein erstgeborenes Kind kostet",
      seriouslyFree: "Wirklich kostenlos",
      seriouslyFreeDesc: "Keine Kreditkarte, kein \"kostenloser Test\", keine Überraschungsrechnungen. Wir fragen noch nicht einmal nach deiner Seele (noch nicht).",
      coolDeveloperFriends: "Coole Entwickler-Freunde",
      coolDeveloperFriendsDesc: "Schließe dich unserer Community von Entwicklern an, die auch nicht glauben können, dass das wirklich kostenlos ist.",
      bankLevelSecurity: "Bank-Level-Sicherheit",
      bankLevelSecurityDesc: "SSH-Schlüssel, WireGuard-Tunnel und unternehmensgrade Paranoia ohne Aufpreis inklusive.",
      requirements: "Anforderungen",
      whatYouNeedToBring: "Was du mitbringen musst",
      justAFewThings: "Nur ein paar Dinge (wir verlangen nicht viel, versprochen)",
      networkSetup: "Netzwerk-Einrichtung",
      internetStuffYouNeed: "Das Internet-Zeug, das du brauchst",
      yourOwnIPv4: "Deine eigene IPv4-Adresse (erforderlich - wir sind keine IP-Händler)",
      ipv6Optional: "IPv6-Adresse (optional, aber cool, wenn du sie hast)",
      wireguardConfigRoute: "WireGuard-Konfiguration (rute diese IP durch uns, bitte)",
      workingInternetConnection: "Tatsächlich funktionierende Internetverbindung",
      sshAuthentication: "SSH-Authentifizierung",
      digitalKeysToKingdom: "Deine digitalen Schlüssel zum Königreich",
      sshKeyPair: "SSH-Schlüsselpaar (RSA, ECDSA oder Ed25519 - wir sind nicht wählerisch)",
      publicKeyForSetup: "Öffentlicher Schlüssel für uns zum Einrichten",
      keepPrivateKeyPrivate: "Behalte deinen privaten Schlüssel privat (ernsthaft)",
      noPasswords: "Keine Passwörter (das ist nicht 2005)",
      getStarted: "Loslegen",
      readyToGetFreeVPS: "Bereit, deinen kostenlosen VPS zu bekommen?",
      fillOutForm: "Fülle dieses Formular aus und wir versorgen dich schneller, als du \"Unternehmensgrade-Infrastruktur\" sagen kannst",
      vpsApplication: "VPS-Bewerbung (Der lustige Teil)",
      tellUsAboutProject: "Erzähl uns von deinem Projekt (und überzeuge uns, dass du keine Weltherrschaft planst)",
      aboutYou: "Über dich (Der Mensch)",
      fullName: "Vollständiger Name",
      fullNamePlaceholder: "Dein tatsächlicher Name (nicht dein GitHub-Benutzername)",
      emailAddress: "E-Mail-Adresse",
      emailPlaceholder: "deine.email@nichtspam.com",
      organizationInstitution: "Organisation/Institution",
      organizationPlaceholder: "Deine Schule, Firma oder 'Schlafzimmer-Startup GmbH'",
      yourAwesomeProject: "Dein tolles Projekt",
      vpsConfiguration: "VPS-Konfiguration",
      chooseWeapon: "Wähle deine Waffe der Wahl",
      standardReliable: "Der Zuverlässige (2GB RAM, 6vCores, 100GB)",
      performanceOverkill: "Der Overkill (4GB RAM, 6vCores, 100GB)",
      mightSuggestDifferent: "Wir könnten etwas anderes vorschlagen, wenn dein Projekt besondere Bedürfnisse hat",
      projectDescription: "Projektbeschreibung",
      projectDescriptionPlaceholder: "Erzähl uns von deinem Projekt! Was baust du? Ist es das nächste Facebook? Ein einfacher Blog? Ein Machine-Learning-Modell, um Katzenverhalten vorherzusagen? Je mehr Details, desto besser können wir dir helfen, erfolgreich zu sein.",
      networkStuff: "Netzwerk-Zeug (Die technischen Bits)",
      ipv4Address: "IPv4-Adresse",
      ipv4Placeholder: "192.168.1.100",
      ipv4Description: "Deine IPv4, die tatsächlich im Internet funktioniert",
      ipv6Address: "IPv6-Adresse",
      optional: "(Optional)",
      ipv6Placeholder: "2001:db8::1",
      ipv6Description: "IPv6, wenn du in der Zukunft lebst",
      wireguardConfiguration: "WireGuard-Konfiguration",
      wireguardPlaceholder: "[Interface]\nPrivateKey = dein-privater-schlüssel-hier\nAddress = 10.0.0.x/24\n\n[Peer]\nPublicKey = server-öffentlicher-schlüssel-hier\nEndpoint = dein.endpoint.com:51820\nAllowedIPs = 0.0.0.0/0",
      wireguardDescription: "Deine WireGuard-Konfiguration, damit wir deine IP richtig routen können",
      sshKeys: "SSH-Schlüssel (Deine digitale ID)",
      sshPublicKey: "SSH-öffentlicher Schlüssel",
      sshPlaceholder: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQ... deine-email@beispiel.com\n\n(Füge hier deinen ÖFFENTLICHEN Schlüssel ein - den, der mit ssh-rsa, ssh-ed25519 usw. beginnt. NICHT deinen privaten Schlüssel!)",
      sshDescription: "Dein SSH-ÖFFENTLICHER Schlüssel (ernsthaft, füge hier nicht deinen privaten Schlüssel ein - wir werden es beide bereuen)",
      agreeToDataHandling: "Durch das Ankreuzen dieses Kästchens stimmst du unseren Datenverarbeitungspraktiken und Servicebedingungen zu.",
      launchingDreams: "Deine Träume starten...",
      launchMyFreeVPS: "Meinen kostenlosen VPS starten! 🚀",
      makingHostingAccessible: "Professionelles Hosting für alle zugänglich machen (und ihre Haustier-Projekte).",
      resources: "Ressourcen",
      documentation: "Dokumentation",
      gettingStarted: "Erste Schritte",
      sshSetupGuide: "SSH-Einrichtungsanleitung",
      wireguardTutorial: "WireGuard-Tutorial",
      community: "Community",
      discordServer: "Discord-Server",
      github: "GitHub",
      statusPage: "Status-Seite",
      support: "Support",
      starUsOnGithub: "Sternen uns auf GitHub",
      copyright: "© 2025 Eclipse Systems VPS-Initiative. Angetrieben von Koffein, guten Absichten und einer schlafenden Pixel-Katze.",
      launchProject: "Projekt starten",
      vpsInitiative: "VPS-Initiative",
      freeVPSNoReally: "Kostenloser VPS (Nein, wirklich!)",
      // Legal documents
      privacyPolicy: "Datenschutzrichtlinie",
      termsOfService: "Nutzungsbedingungen",
      // Alert messages
      pleaseAgreeToTerms: "Bitte stimme der Datenschutzrichtlinie und den Nutzungsbedingungen zu, um fortzufahren.",
      applicationSubmitted: "Bewerbung erfolgreich eingereicht! Wir werden sie innerhalb von 24-48 Stunden überprüfen.",
      failedToSubmit: "Bewerbung konnte nicht eingereicht werden. Bitte versuche es erneut.",
    },
    ru: {
      title: "Бесплатный VPS Который Реально Работает",
      subtitle:
        "Профессиональный VPS-хостинг который стоит ровно $0.00 (мы проверили математику дважды). Просто принесите свой IPv4 и SSH ключи - мы позаботимся об остальном пока наш пиксельный кот-талисман наблюдает.",
      getVPS: "Получить Мой Бесплатный VPS",
      showGoods: "Покажи Мне Товары",
      blazingFast: "Молниеносно Быстро",
      blazingDesc: "Корпоративные процессоры E5-2600v4 которые летают (до 3,4ГГц макс)",
      fortKnox: "Безопасность Форт-Нокс",
      fortKnoxDesc: "Только SSH ключи - пароли это так 1995",
      actuallyFree: "Действительно Бесплатно",
      actuallyFreeDesc: 'Никаких скрытых платежей, никаких "подвохов", никакой продажи ваших данных инопланетянам',
      pickFighter: "Выберите Своего Бойца",
      reliable: "Надёжный",
      overkill: "Избыточный",
      boostClockNote: "* Частоты буста могут варьироваться в зависимости от нагрузки и тепловых условий",
      privacyTerms: "Я согласен с Политикой конфиденциальности и Условиями обслуживания",
      githubProfile: "GitHub Профиль (Необязательно)",
      // Additional translations
      serverConfigurations: "Конфигурации Серверов",
      bothOptionsOverpowered: "Обе опции смехотворно избыточны для большинства проектов (но эй, почему бы и нет?)",
      perfectForMostThings: "Идеально для большинства вещей",
      greatForWebApps: "Отлично для веб-приложений, API и впечатления друзей вашим \"сервером\"",
      when2GBNotEnough: "Когда 2GB просто недостаточно",
      forDatabasesHeavyApps: "Для баз данных, тяжелых приложений и когда вы хотите чувствовать себя круто",
      finePrintTitle: "Мелкий шрифт (Но на самом деле важный)",
      finePrintText: "Мы можем сказать \"нет\", если вы хотите майнить криптовалюту или хостить вашу коллекцию 4K видео с котами. Ограниченный запас означает ограниченный запас - кто первый, тот и обслуживается! Мы оставляем за собой право предложить альтернативы, если вашему проекту нужно что-то другое (например, терапия для желания запустить Crysis на VPS).",
      platformFeatures: "Возможности Платформы",
      whyWereAwesome: "Почему мы действительно крутые",
      professionalInfrastructure: "Профессиональная инфраструктура, которая не стоит вашего первенца",
      seriouslyFree: "Серьезно бесплатно",
      seriouslyFreeDesc: "Никаких кредитных карт, никакого \"бесплатного пробного периода\", никаких сюрприз-счетов. Мы даже не просим вашу душу (пока).",
      coolDeveloperFriends: "Крутые друзья-разработчики",
      coolDeveloperFriendsDesc: "Присоединяйтесь к нашему сообществу разработчиков, которые тоже не могут поверить, что это действительно бесплатно.",
      bankLevelSecurity: "Банковский уровень безопасности",
      bankLevelSecurityDesc: "SSH ключи, WireGuard туннели и корпоративная паранойя включены без дополнительной платы.",
      requirements: "Требования",
      whatYouNeedToBring: "Что вам нужно принести",
      justAFewThings: "Всего несколько вещей (мы просим не много, обещаем)",
      networkSetup: "Настройка сети",
      internetStuffYouNeed: "Интернет-вещи, которые вам нужны",
      yourOwnIPv4: "Ваш собственный IPv4 адрес (обязательно - мы не IP дилеры)",
      ipv6Optional: "IPv6 адрес (опционально, но круто, если у вас есть)",
      wireguardConfigRoute: "WireGuard конфигурация (маршрутизируйте этот IP через нас, пожалуйста)",
      workingInternetConnection: "Действительно работающее интернет-соединение",
      sshAuthentication: "SSH аутентификация",
      digitalKeysToKingdom: "Ваши цифровые ключи к королевству",
      sshKeyPair: "SSH пара ключей (RSA, ECDSA или Ed25519 - мы не привередливы)",
      publicKeyForSetup: "Публичный ключ для нас, чтобы настроить",
      keepPrivateKeyPrivate: "Держите ваш приватный ключ приватным (серьезно)",
      noPasswords: "Никаких паролей (это не 2005)",
      getStarted: "Начать",
      readyToGetFreeVPS: "Готовы получить ваш бесплатный VPS?",
      fillOutForm: "Заполните эту форму, и мы подключим вас быстрее, чем вы сможете сказать \"корпоративная инфраструктура\"",
      vpsApplication: "Заявка на VPS (Интересная часть)",
      tellUsAboutProject: "Расскажите нам о вашем проекте (и убедите нас, что вы не планируете мировое господство)",
      aboutYou: "О вас (Человек)",
      fullName: "Полное имя",
      fullNamePlaceholder: "Ваше настоящее имя (не ваш GitHub username)",
      emailAddress: "Email адрес",
      emailPlaceholder: "ваш.email@неспам.com",
      organizationInstitution: "Организация/Учреждение",
      organizationPlaceholder: "Ваша школа, компания или 'Спальня Стартап Инк.'",
      yourAwesomeProject: "Ваш крутой проект",
      vpsConfiguration: "VPS конфигурация",
      chooseWeapon: "Выберите ваше оружие выбора",
      standardReliable: "Надежный (2GB RAM, 6vCores, 100GB)",
      performanceOverkill: "Избыточный (4GB RAM, 6vCores, 100GB)",
      mightSuggestDifferent: "Мы можем предложить что-то другое, если у вашего проекта особые потребности",
      projectDescription: "Описание проекта",
      projectDescriptionPlaceholder: "Расскажите нам о вашем проекте! Что вы строите? Это следующее Facebook? Простой блог? Модель машинного обучения для предсказания поведения котов? Чем больше деталей, тем лучше мы можем помочь вам добиться успеха.",
      networkStuff: "Сетевые вещи (Технические биты)",
      ipv4Address: "IPv4 адрес",
      ipv4Placeholder: "192.168.1.100",
      ipv4Description: "Ваш IPv4, который действительно работает в интернете",
      ipv6Address: "IPv6 адрес",
      optional: "(Опционально)",
      ipv6Placeholder: "2001:db8::1",
      ipv6Description: "IPv6, если вы живете в будущем",
      wireguardConfiguration: "WireGuard конфигурация",
      wireguardPlaceholder: "[Interface]\nPrivateKey = ваш-приватный-ключ-здесь\nAddress = 10.0.0.x/24\n\n[Peer]\nPublicKey = сервер-публичный-ключ-здесь\nEndpoint = ваш.endpoint.com:51820\nAllowedIPs = 0.0.0.0/0",
      wireguardDescription: "Ваша WireGuard конфигурация, чтобы мы могли правильно маршрутизировать ваш IP",
      sshKeys: "SSH ключи (Ваша цифровая ID)",
      sshPublicKey: "SSH публичный ключ",
      sshPlaceholder: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQ... ваш-email@пример.com\n\n(Вставьте сюда ваш ПУБЛИЧНЫЙ ключ - тот, который начинается с ssh-rsa, ssh-ed25519 и т.д. НЕ ваш приватный ключ!)",
      sshDescription: "Ваш SSH ПУБЛИЧНЫЙ ключ (серьезно, не вставляйте сюда ваш приватный ключ - мы оба пожалеем об этом)",
      agreeToDataHandling: "Отмечая этот флажок, вы соглашаетесь с нашими практиками обработки данных и условиями обслуживания.",
      launchingDreams: "Запуск ваших мечтаний...",
      launchMyFreeVPS: "Запустить мой бесплатный VPS! 🚀",
      makingHostingAccessible: "Делаем профессиональный хостинг доступным для всех (и их домашних проектов).",
      resources: "Ресурсы",
      documentation: "Документация",
      gettingStarted: "Начало работы",
      sshSetupGuide: "Руководство по настройке SSH",
      wireguardTutorial: "WireGuard туториал",
      community: "Сообщество",
      discordServer: "Discord сервер",
      github: "GitHub",
      statusPage: "Страница статуса",
      support: "Поддержка",
      starUsOnGithub: "Поставьте звезду на GitHub",
      copyright: "© 2025 Eclipse Systems VPS Инициатива. Работает на кофеине, благих намерениях и спящей пиксельной кошке.",
      launchProject: "Запустить проект",
      vpsInitiative: "VPS Инициатива",
      freeVPSNoReally: "Бесплатный VPS (Нет, правда!)",
      // Legal documents
      privacyPolicy: "Политика конфиденциальности",
      termsOfService: "Условия обслуживания",
      // Alert messages
      pleaseAgreeToTerms: "Пожалуйста, согласитесь с Политикой конфиденциальности и Условиями обслуживания, чтобы продолжить.",
      applicationSubmitted: "Заявка успешно отправлена! Мы рассмотрим её в течение 24-48 часов.",
      failedToSubmit: "Не удалось отправить заявку. Пожалуйста, попробуйте снова.",
    },
    ja: {
      title: "実際に動作する無料VPS",
      subtitle:
        "正確に$0.00のプロフェッショナルVPSホスティング（数学を2回チェックしました）。IPv4とSSHキーを持参するだけ - ピクセル猫マスコットが監督している間、残りは私たちが処理します。",
      getVPS: "無料VPSを取得",
      showGoods: "商品を見せて",
      blazingFast: "超高速",
      blazingDesc: "ズームするエンタープライズE5-2600v4プロセッサー（最大3.4GHz）",
      fortKnox: "フォートノックス級セキュリティ",
      fortKnoxDesc: "SSHキーのみ - パスワードは1995年のもの",
      actuallyFree: "本当に無料",
      actuallyFreeDesc: "隠れた料金なし、「落とし穴」なし、エイリアンへのデータ販売なし",
      pickFighter: "ファイターを選択",
      reliable: "信頼できる",
      overkill: "オーバーキル",
      boostClockNote: "* ブーストクロック速度は、ワークロードと熱条件によって異なる場合があります",
      privacyTerms: "プライバシーポリシーと利用規約に同意します",
      githubProfile: "GitHubプロフィール（オプション）",
      // Additional translations
      serverConfigurations: "サーバー設定",
      bothOptionsOverpowered: "両方のオプションは、ほとんどのプロジェクトに対して途方もなく過剰です（でも、なぜでしょう？）",
      perfectForMostThings: "ほとんどのものに完璧",
      greatForWebApps: "Webアプリ、API、そして友達を「サーバー」で感動させるのに最適",
      when2GBNotEnough: "2GBでは足りない場合",
      forDatabasesHeavyApps: "データベース、重いアプリ、そしてファンシーに感じたい場合",
      finePrintTitle: "細かい文字（でも実際は重要）",
      finePrintText: "暗号通貨のマイニングや4K猫動画のコレクションをホストしたい場合は「いいえ」と言うかもしれません。在庫限定は在庫限定を意味します - 先着順です！プロジェクトが何か違うものを必要とする場合（VPSでCrysisを動かしたいという願望のためのセラピーのような）、代替案を提案する権利を留保します。",
      platformFeatures: "プラットフォーム機能",
      whyWereAwesome: "なぜ私たちが本当に素晴らしいのか",
      professionalInfrastructure: "長男を犠牲にしないプロフェッショナルインフラ",
      seriouslyFree: "本当に無料",
      seriouslyFreeDesc: "クレジットカードなし、「無料トライアル」なし、サプライズ請求書なし。まだ魂を求めていません（まだ）。",
      coolDeveloperFriends: "クールな開発者フレンド",
      coolDeveloperFriendsDesc: "これが本当に無料だとは信じられない開発者のコミュニティに参加してください。",
      bankLevelSecurity: "銀行レベルのセキュリティ",
      bankLevelSecurityDesc: "SSHキー、WireGuardトンネル、エンタープライズグレードのパラノイアが追加料金なしで含まれています。",
      requirements: "要件",
      whatYouNeedToBring: "持ってくる必要があるもの",
      justAFewThings: "ほんの少しのもの（多くは求めていません、約束します）",
      networkSetup: "ネットワーク設定",
      internetStuffYouNeed: "必要なインターネットのもの",
      yourOwnIPv4: "独自のIPv4アドレス（必須 - IPディーラーではありません）",
      ipv6Optional: "IPv6アドレス（オプション、でも持っているとクール）",
      wireguardConfigRoute: "WireGuard設定（そのIPを私たちを通してルーティングしてください）",
      workingInternetConnection: "実際に動作するインターネット接続",
      sshAuthentication: "SSH認証",
      digitalKeysToKingdom: "王国へのデジタルキー",
      sshKeyPair: "SSHキーペア（RSA、ECDSA、またはEd25519 - うるさくありません）",
      publicKeyForSetup: "セットアップ用の公開キー",
      keepPrivateKeyPrivate: "秘密キーを秘密に保つ（真剣に）",
      noPasswords: "パスワードなし（これは2005年ではありません）",
      getStarted: "始める",
      readyToGetFreeVPS: "無料VPSを取得する準備はできていますか？",
      fillOutForm: "このフォームに記入すれば、「エンタープライズグレードインフラ」と言うより早く接続します",
      vpsApplication: "VPSアプリケーション（楽しい部分）",
      tellUsAboutProject: "プロジェクトについて教えてください（そして世界征服を計画していないことを納得させてください）",
      aboutYou: "あなたについて（人間）",
      fullName: "フルネーム",
      fullNamePlaceholder: "実際の名前（GitHubユーザー名ではありません）",
      emailAddress: "メールアドレス",
      emailPlaceholder: "your.email@notspam.com",
      organizationInstitution: "組織/機関",
      organizationPlaceholder: "あなたの学校、会社、または「ベッドルームスタートアップ株式会社」",
      yourAwesomeProject: "あなたの素晴らしいプロジェクト",
      vpsConfiguration: "VPS設定",
      chooseWeapon: "選択の武器を選ぶ",
      standardReliable: "信頼できる（2GB RAM、6vCores、100GB）",
      performanceOverkill: "オーバーキル（4GB RAM、6vCores、100GB）",
      mightSuggestDifferent: "プロジェクトに特別なニーズがある場合は、何か違うものを提案するかもしれません",
      projectDescription: "プロジェクトの説明",
      projectDescriptionPlaceholder: "プロジェクトについて教えてください！何を構築していますか？次のFacebookですか？シンプルなブログですか？猫の行動を予測する機械学習モデルですか？詳細が多ければ多いほど、成功を支援できます。",
      networkStuff: "ネットワークのもの（技術的なビット）",
      ipv4Address: "IPv4アドレス",
      ipv4Placeholder: "192.168.1.100",
      ipv4Description: "インターネットで実際に動作するIPv4",
      ipv6Address: "IPv6アドレス",
      optional: "（オプション）",
      ipv6Placeholder: "2001:db8::1",
      ipv6Description: "未来に住んでいる場合のIPv6",
      wireguardConfiguration: "WireGuard設定",
      wireguardPlaceholder: "[Interface]\nPrivateKey = あなたの秘密キーここ\nAddress = 10.0.0.x/24\n\n[Peer]\nPublicKey = サーバー公開キーここ\nEndpoint = your.endpoint.com:51820\nAllowedIPs = 0.0.0.0/0",
      wireguardDescription: "IPを適切にルーティングできるようにするWireGuard設定",
      sshKeys: "SSHキー（あなたのデジタルID）",
      sshPublicKey: "SSH公開キー",
      sshPlaceholder: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQ... your-email@example.com\n\n（ここにPUBLICキーを貼り付けてください - ssh-rsa、ssh-ed25519などで始まるもの。秘密キーではありません！）",
      sshDescription: "SSH PUBLICキー（真剣に、ここに秘密キーを貼り付けないでください - 私たちは両方とも後悔します）",
      agreeToDataHandling: "このボックスをチェックすることで、データ処理の実践とサービス条件に同意します。",
      launchingDreams: "あなたの夢を起動中...",
      launchMyFreeVPS: "無料VPSを起動！🚀",
      makingHostingAccessible: "プロフェッショナルホスティングを誰でも利用できるようにする（そして彼らのペットプロジェクト）。",
      resources: "リソース",
      documentation: "ドキュメント",
      gettingStarted: "はじめに",
      sshSetupGuide: "SSHセットアップガイド",
      wireguardTutorial: "WireGuardチュートリアル",
      community: "コミュニティ",
      discordServer: "Discordサーバー",
      github: "GitHub",
      statusPage: "ステータスページ",
      support: "サポート",
      starUsOnGithub: "GitHubでスターを付ける",
      copyright: "© 2025 Eclipse Systems VPSイニシアチブ。カフェイン、善意、眠っているピクセル猫によって動力を得ています。",
      launchProject: "プロジェクトを起動",
      vpsInitiative: "VPSイニシアチブ",
      freeVPSNoReally: "無料VPS（いいえ、本当に！）",
      // Legal documents
      privacyPolicy: "プライバシーポリシー",
      termsOfService: "利用規約",
      // Alert messages
      pleaseAgreeToTerms: "続行するには、プライバシーポリシーと利用規約に同意してください。",
      applicationSubmitted: "アプリケーションが正常に送信されました！24-48時間以内にレビューします。",
      failedToSubmit: "アプリケーションの送信に失敗しました。もう一度お試しください。",
    },
    zh: {
      title: "真正有效的免费VPS",
      subtitle:
        "专业VPS托管服务，成本正好是$0.00（我们检查了两遍数学）。只需带上您的IPv4和SSH密钥 - 我们会处理其余部分，而我们的像素猫吉祥物在监督。",
      getVPS: "获取我的免费VPS",
      showGoods: "展示商品",
      blazingFast: "极速快",
      blazingDesc: "企业级E5-2600v4处理器飞速运行（最高3.4GHz）",
      fortKnox: "诺克斯堡级安全",
      fortKnoxDesc: "仅SSH密钥 - 密码是1995年的东西",
      actuallyFree: "真正免费",
      actuallyFreeDesc: '无隐藏费用，无"陷阱"，不向外星人出售您的数据',
      pickFighter: "选择您的战士",
      reliable: "可靠的",
      overkill: "过度杀伤",
      boostClockNote: "* 提升时钟速度可能因工作负载和热条件而异",
      privacyTerms: "我同意隐私政策和服务条款",
      githubProfile: "GitHub个人资料（可选）",
      // Additional translations
      serverConfigurations: "服务器配置",
      bothOptionsOverpowered: "两个选项对于大多数项目来说都荒谬地过度配置（但是嘿，为什么不呢？）",
      perfectForMostThings: "对大多数事情都完美",
      greatForWebApps: "非常适合Web应用、API和用你的\"服务器\"给朋友留下深刻印象",
      when2GBNotEnough: "当2GB不够用时",
      forDatabasesHeavyApps: "适用于数据库、重型应用和当你想要感觉时髦时",
      finePrintTitle: "细则（但实际很重要）",
      finePrintText: "如果你想挖矿加密货币或托管你的4K猫咪视频收藏，我们可能会说\"不\"。库存有限意味着库存有限 - 先到先得！如果你的项目需要不同的东西（比如想要在VPS上运行Crysis的治疗），我们保留建议替代方案的权利。",
      platformFeatures: "平台功能",
      whyWereAwesome: "为什么我们真的很棒",
      professionalInfrastructure: "不花费你长子的专业基础设施",
      seriouslyFree: "真的免费",
      seriouslyFreeDesc: "没有信用卡，没有\"免费试用\"，没有意外账单。我们甚至还没有要求你的灵魂（还没有）。",
      coolDeveloperFriends: "酷开发者朋友",
      coolDeveloperFriendsDesc: "加入我们那些也不相信这真的免费的开发者社区。",
      bankLevelSecurity: "银行级安全",
      bankLevelSecurityDesc: "SSH密钥、WireGuard隧道和企业级偏执狂都包含在内，无需额外费用。",
      requirements: "要求",
      whatYouNeedToBring: "你需要带来的东西",
      justAFewThings: "只需要几样东西（我们要求不多，承诺）",
      networkSetup: "网络设置",
      internetStuffYouNeed: "你需要的互联网东西",
      yourOwnIPv4: "你自己的IPv4地址（必需 - 我们不是IP经销商）",
      ipv6Optional: "IPv6地址（可选，但如果你有的话很酷）",
      wireguardConfigRoute: "WireGuard配置（请通过我们路由那个IP）",
      workingInternetConnection: "实际工作的互联网连接",
      sshAuthentication: "SSH认证",
      digitalKeysToKingdom: "你通往王国的数字钥匙",
      sshKeyPair: "SSH密钥对（RSA、ECDSA或Ed25519 - 我们不挑剔）",
      publicKeyForSetup: "供我们设置的公钥",
      keepPrivateKeyPrivate: "保持你的私钥私密（认真）",
      noPasswords: "没有密码（这不是2005年）",
      getStarted: "开始",
      readyToGetFreeVPS: "准备好获得你的免费VPS了吗？",
      fillOutForm: "填写这个表格，我们会比你说\"企业级基础设施\"更快地连接你",
      vpsApplication: "VPS申请（有趣的部分）",
      tellUsAboutProject: "告诉我们你的项目（并说服我们你不是在计划世界统治）",
      aboutYou: "关于你（人类）",
      fullName: "全名",
      fullNamePlaceholder: "你的真实姓名（不是你的GitHub用户名）",
      emailAddress: "电子邮件地址",
      emailPlaceholder: "your.email@notspam.com",
      organizationInstitution: "组织/机构",
      organizationPlaceholder: "你的学校、公司或'卧室创业公司'",
      yourAwesomeProject: "你的精彩项目",
      vpsConfiguration: "VPS配置",
      chooseWeapon: "选择你的选择武器",
      standardReliable: "可靠的（2GB RAM，6vCores，100GB）",
      performanceOverkill: "过度杀伤（4GB RAM，6vCores，100GB）",
      mightSuggestDifferent: "如果你的项目有特殊需求，我们可能会建议不同的东西",
      projectDescription: "项目描述",
      projectDescriptionPlaceholder: "告诉我们你的项目！你在构建什么？是下一个Facebook吗？一个简单的博客？一个预测猫咪行为的机器学习模型？细节越多，我们越能帮助你成功。",
      networkStuff: "网络东西（技术位）",
      ipv4Address: "IPv4地址",
      ipv4Placeholder: "192.168.1.100",
      ipv4Description: "你的IPv4，实际上在互联网上工作",
      ipv6Address: "IPv6地址",
      optional: "（可选）",
      ipv6Placeholder: "2001:db8::1",
      ipv6Description: "如果你生活在未来的IPv6",
      wireguardConfiguration: "WireGuard配置",
      wireguardPlaceholder: "[Interface]\nPrivateKey = 你的私钥在这里\nAddress = 10.0.0.x/24\n\n[Peer]\nPublicKey = 服务器公钥在这里\nEndpoint = your.endpoint.com:51820\nAllowedIPs = 0.0.0.0/0",
      wireguardDescription: "你的WireGuard配置，这样我们就能正确路由你的IP",
      sshKeys: "SSH密钥（你的数字ID）",
      sshPublicKey: "SSH公钥",
      sshPlaceholder: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQ... your-email@example.com\n\n（在这里粘贴你的PUBLIC密钥 - 以ssh-rsa、ssh-ed25519等开头的那个。不是你的私钥！）",
      sshDescription: "你的SSH PUBLIC密钥（认真地说，不要在这里粘贴你的私钥 - 我们都会后悔的）",
      agreeToDataHandling: "通过勾选此框，你同意我们的数据处理实践和服务条款。",
      launchingDreams: "启动你的梦想...",
      launchMyFreeVPS: "启动我的免费VPS！🚀",
      makingHostingAccessible: "让专业托管对每个人都可以访问（和他们的宠物项目）。",
      resources: "资源",
      documentation: "文档",
      gettingStarted: "开始使用",
      sshSetupGuide: "SSH设置指南",
      wireguardTutorial: "WireGuard教程",
      community: "社区",
      discordServer: "Discord服务器",
      github: "GitHub",
      statusPage: "状态页面",
      support: "支持",
      starUsOnGithub: "在GitHub上给我们星标",
      copyright: "© 2025 Eclipse Systems VPS倡议。由咖啡因、善意和一只睡觉的像素猫提供动力。",
      launchProject: "启动项目",
      vpsInitiative: "VPS倡议",
      freeVPSNoReally: "免费VPS（不，真的！）",
      // Legal documents
      privacyPolicy: "隐私政策",
      termsOfService: "服务条款",
      // Hobby project notice
      hobbyProjectNotice: "业余项目通知",
      hobbyProjectDescription: "这是一个非商业、业余运营的学生项目。我们不是企业，也不提供商业托管服务。此服务专为教育目的、个人项目和学习体验而设计。",
      // Alert messages
      pleaseAgreeToTerms: "请同意隐私政策和服务条款以继续。",
      applicationSubmitted: "申请提交成功！我们将在24-48小时内审核。",
      failedToSubmit: "申请提交失败。请重试。",
    },
  }

  const t = translations[language as keyof typeof translations] || translations.en

  useEffect(() => {
    const fetchGitHubStars = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/eclipsesys/vps")
        if (response.ok) {
          const data = await response.json()
          setGithubStars(data.stargazers_count)
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stars:", error)
      }
    }

    fetchGitHubStars()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.agreeToTerms) {
      alert(t.pleaseAgreeToTerms)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert(t.applicationSubmitted)
        setFormData({
          name: "",
          email: "",
          university: "",
          githubProfile: "",
          vpsType: "",
          purpose: "",
          ipv4: "",
          ipv6: "",
          wireguardConfig: "",
          sshKey: "",
          agreeToTerms: false,
        })
      } else {
        throw new Error("Failed to submit application")
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      alert(t.failedToSubmit)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-32 bg-background/80 backdrop-blur-sm border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">🇺🇸 EN</SelectItem>
            <SelectItem value="de">🇩🇪 DE</SelectItem>
            <SelectItem value="ru">🇷🇺 RU</SelectItem>
            <SelectItem value="ja">🇯🇵 JA</SelectItem>
            <SelectItem value="zh">🇨🇳 ZH</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <header className="border-b border-border/50 glass-effect sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xl relative animate-pulse-glow">
              <img
                src="/eclipse-systems-logo.png"
                alt="Eclipse Systems Logo"
                className="w-full h-full object-cover pixelated"
              />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Eclipse Systems</h1>
              <p className="text-sm text-muted-foreground flex items-center space-x-2">
                <Sparkles className="w-3 h-3 text-primary" />
                <span>{t.vpsInitiative}</span>
              </p>
            </div>
          </div>
          <Button
            className="cosmic-gradient hover:scale-105 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-6 py-2 relative overflow-hidden group"
            onClick={() => scrollToSection("contact-form")}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10">{t.launchProject}</span>
          </Button>
        </div>
      </header>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-6 h-6 border-2 border-primary/20 rotate-45 animate-float"></div>
          <div className="absolute bottom-20 left-20 w-8 h-8 border-2 border-accent/20 animate-drift"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-primary/10 rotate-45 animate-pulse"></div>
        </div>

        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <Badge
            variant="secondary"
            className="mb-8 bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium"
          >
            <Server className="w-4 h-4 mr-2" />
            {t.freeVPSNoReally}
          </Badge>

          <h1 className="text-7xl md:text-8xl font-bold text-foreground mb-8 text-balance leading-tight">
            {t.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="cosmic-gradient bg-clip-text text-transparent relative">
              {t.title.split(" ").slice(-1)[0]}
              <div className="absolute inset-0 cosmic-gradient blur-2xl opacity-20 -z-10"></div>
            </span>
          </h1>

          <p className="text-2xl text-muted-foreground mb-12 text-pretty leading-relaxed max-w-4xl mx-auto">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="cosmic-gradient hover:scale-105 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 px-10 py-4 text-lg relative overflow-hidden group"
              onClick={() => scrollToSection("contact-form")}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10">{t.getVPS}</span>
              <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-border hover:bg-muted/50 bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-4 text-lg group"
              onClick={() => scrollToSection("features")}
            >
              <Shield className="w-6 h-6 mr-3 text-primary group-hover:scale-110 transition-transform" />
              {t.showGoods}
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 cosmic-gradient rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t.blazingFast}</h3>
              <p className="text-sm text-muted-foreground">{t.blazingDesc}</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 cosmic-gradient rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t.fortKnox}</h3>
              <p className="text-sm text-muted-foreground">{t.fortKnoxDesc}</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 cosmic-gradient rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t.actuallyFree}</h3>
              <p className="text-sm text-muted-foreground">{t.actuallyFreeDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-muted/30 relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
              <Server className="w-4 h-4 mr-2" />
              {t.serverConfigurations}
            </Badge>
            <h2 className="text-5xl font-bold text-foreground mb-6">{t.pickFighter}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.bothOptionsOverpowered}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard VPS */}
            <Card className="glass-effect border-2 border-border hover:border-primary/30 hover:scale-105 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute inset-0 cosmic-gradient opacity-0 group-hover:opacity-5 transition-opacity"></div>

              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 cosmic-gradient rounded-2xl flex items-center justify-center">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-foreground">{t.reliable}</div>
                    <div className="text-sm text-muted-foreground">{t.perfectForMostThings}</div>
                  </div>
                </div>
                <CardDescription className="text-base text-muted-foreground">
                  {t.greatForWebApps}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <MemoryStick className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">2GB DDR4</div>
                        <div className="text-xs text-muted-foreground">REG ECC 2400MHz</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <HardDrive className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">100GB</div>
                        <div className="text-xs text-muted-foreground">Dedicated Storage</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">6 vCores</div>
                        <div className="text-xs text-muted-foreground">E5-2600v4</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">3.4GHz max</div>
                        <div className="text-xs text-muted-foreground">Boost Clock</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance VPS */}
            <Card className="glass-effect border-2 border-border hover:border-accent/30 hover:scale-105 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute inset-0 cosmic-gradient opacity-0 group-hover:opacity-5 transition-opacity"></div>

              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 cosmic-gradient rounded-2xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-foreground">{t.overkill}</div>
                    <div className="text-sm text-muted-foreground">{t.when2GBNotEnough}</div>
                  </div>
                </div>
                <CardDescription className="text-base text-muted-foreground">
                  {t.forDatabasesHeavyApps}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <MemoryStick className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">4GB DDR4</div>
                        <div className="text-xs text-muted-foreground">REG ECC 2400MHz</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <HardDrive className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">100GB</div>
                        <div className="text-xs text-muted-foreground">Dedicated Storage</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">6 vCores</div>
                        <div className="text-xs text-muted-foreground">E5-2600v4</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">3.4GHz max</div>
                        <div className="text-xs text-muted-foreground">Boost Clock</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 glass-effect rounded-2xl border border-border/50 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t.boostClockNote}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 glass-effect rounded-2xl border border-border/50 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{t.finePrintTitle}</h3>
                <p className="text-muted-foreground">
                  {t.finePrintText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-accent/30 text-accent">
              <Sparkles className="w-4 h-4 mr-2" />
              {t.platformFeatures}
            </Badge>
            <h2 className="text-5xl font-bold text-foreground mb-6">{t.whyWereAwesome}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.professionalInfrastructure}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="glass-effect border-border hover:border-primary/30 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 cosmic-gradient opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="w-20 h-20 cosmic-gradient rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-3">{t.seriouslyFree}</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {t.seriouslyFreeDesc}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect border-border hover:border-primary/30 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 cosmic-gradient opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="w-20 h-20 cosmic-gradient rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-3">{t.coolDeveloperFriends}</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {t.coolDeveloperFriendsDesc}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect border-border hover:border-primary/30 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 cosmic-gradient opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="w-20 h-20 cosmic-gradient rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-3">{t.bankLevelSecurity}</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {t.bankLevelSecurityDesc}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-muted/30 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
              <CheckCircle className="w-4 h-4 mr-2" />
              {t.requirements}
            </Badge>
            <h2 className="text-5xl font-bold text-foreground mb-6">{t.whatYouNeedToBring}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.justAFewThings}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass-effect rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 cosmic-gradient rounded-2xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{t.networkSetup}</h3>
                    <p className="text-muted-foreground">{t.internetStuffYouNeed}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{t.yourOwnIPv4}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{t.ipv6Optional}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{t.wireguardConfigRoute}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{t.workingInternetConnection}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-effect rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 cosmic-gradient rounded-2xl flex items-center justify-center">
                    <Key className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{t.sshAuthentication}</h3>
                    <p className="text-muted-foreground">{t.digitalKeysToKingdom}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{t.sshKeyPair}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{t.publicKeyForSetup}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{t.keepPrivateKeyPrivate}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{t.noPasswords}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-accent/30 text-accent">
              <Rocket className="w-4 h-4 mr-2" />
              {t.getStarted}
            </Badge>
            <h2 className="text-5xl font-bold text-foreground mb-6">{t.readyToGetFreeVPS}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.fillOutForm}
            </p>
          </div>

          <Card className="glass-effect border-2 border-border shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 cosmic-gradient opacity-5"></div>
            <CardHeader className="relative z-10 text-center pb-8">
              <CardTitle className="text-3xl text-foreground flex items-center justify-center space-x-3">
                <div className="w-12 h-12 cosmic-gradient rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <span>{t.vpsApplication}</span>
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground mt-4">
                {t.tellUsAboutProject}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8 relative z-10 px-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span>{t.aboutYou}</span>
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        {t.fullName}
                      </Label>
                      <Input
                        id="name"
                        placeholder={t.fullNamePlaceholder}
                        className="bg-background/50 border-border focus:ring-primary h-12"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        {t.emailAddress}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t.emailPlaceholder}
                        className="bg-background/50 border-border focus:ring-primary h-12"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="university" className="text-foreground font-medium">
                        {t.organizationInstitution}
                      </Label>
                      <Input
                        id="university"
                        placeholder={t.organizationPlaceholder}
                        className="bg-background/50 border-border focus:ring-primary h-12"
                        value={formData.university}
                        onChange={(e) => handleInputChange("university", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="github-profile" className="text-foreground font-medium">
                        {t.githubProfile}
                      </Label>
                      <Input
                        id="github-profile"
                        placeholder="https://github.com/yourusername"
                        className="bg-background/50 border-border focus:ring-primary h-12"
                        value={formData.githubProfile}
                        onChange={(e) => handleInputChange("githubProfile", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground flex items-center space-x-2">
                    <Rocket className="w-5 h-5 text-primary" />
                    <span>{t.yourAwesomeProject}</span>
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="vps-type" className="text-foreground font-medium">
                      {t.vpsConfiguration}
                    </Label>
                    <Select value={formData.vpsType} onValueChange={(value) => handleInputChange("vpsType", value)}>
                      <SelectTrigger className="bg-background/50 border-border focus:ring-primary h-12">
                        <SelectValue placeholder={t.chooseWeapon} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">{t.standardReliable}</SelectItem>
                        <SelectItem value="performance">{t.performanceOverkill}</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      {t.mightSuggestDifferent}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="purpose" className="text-foreground font-medium">
                      {t.projectDescription}
                    </Label>
                    <Textarea
                      id="purpose"
                      placeholder={t.projectDescriptionPlaceholder}
                      className="bg-background/50 border-border focus:ring-primary min-h-[120px] resize-none"
                      value={formData.purpose}
                      onChange={(e) => handleInputChange("purpose", e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Network Configuration */}
                <div className="space-y-6 p-8 glass-effect rounded-2xl border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-accent" />
                    <span>{t.networkStuff}</span>
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="ipv4" className="text-foreground font-medium">
                        {t.ipv4Address} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="ipv4"
                        placeholder={t.ipv4Placeholder}
                        className="bg-background/50 border-border focus:ring-primary h-12"
                        value={formData.ipv4}
                        onChange={(e) => handleInputChange("ipv4", e.target.value)}
                        required
                      />
                      <p className="text-sm text-muted-foreground">{t.ipv4Description}</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ipv6" className="text-foreground font-medium">
                        {t.ipv6Address} <span className="text-muted-foreground">{t.optional}</span>
                      </Label>
                      <Input
                        id="ipv6"
                        placeholder={t.ipv6Placeholder}
                        className="bg-background/50 border-border focus:ring-primary h-12"
                        value={formData.ipv6}
                        onChange={(e) => handleInputChange("ipv6", e.target.value)}
                      />
                      <p className="text-sm text-muted-foreground">{t.ipv6Description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="wireguard-config" className="text-foreground font-medium">
                      {t.wireguardConfiguration}
                    </Label>
                    <Textarea
                      id="wireguard-config"
                      placeholder={t.wireguardPlaceholder}
                      className="bg-background/50 border-border focus:ring-primary min-h-[140px] font-mono text-sm resize-none"
                      value={formData.wireguardConfig}
                      onChange={(e) => handleInputChange("wireguardConfig", e.target.value)}
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      {t.wireguardDescription}
                    </p>
                  </div>
                </div>

                {/* SSH Authentication */}
                <div className="space-y-6 p-8 glass-effect rounded-2xl border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground flex items-center space-x-2">
                    <Key className="w-5 h-5 text-accent" />
                    <span>{t.sshKeys}</span>
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="ssh-key" className="text-foreground font-medium">
                      {t.sshPublicKey}
                    </Label>
                    <Textarea
                      id="ssh-key"
                      placeholder={t.sshPlaceholder}
                      className="bg-background/50 border-border focus:ring-primary min-h-[100px] font-mono text-sm resize-none"
                      value={formData.sshKey}
                      onChange={(e) => handleInputChange("sshKey", e.target.value)}
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      {t.sshDescription}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-6 glass-effect rounded-2xl border border-border/50">
                  <Checkbox
                    id="agree-terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    className="mt-1"
                  />
                  <div className="space-y-1">
                    <Label htmlFor="agree-terms" className="text-foreground font-medium cursor-pointer">
                      {t.privacyTerms}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {t.agreeToDataHandling}
                    </p>
                    <div className="flex space-x-4 text-sm">
                      <a 
                        href="/privacy-policy" 
                        className="text-primary hover:underline"
                      >
                        {t.privacyPolicy}
                      </a>
                      <a 
                        href="/terms-of-service" 
                        className="text-primary hover:underline"
                      >
                        {t.termsOfService}
                      </a>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full cosmic-gradient hover:scale-105 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 py-4 text-lg relative overflow-hidden group"
                  disabled={isSubmitting || !formData.agreeToTerms}
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 mr-3 animate-spin relative z-10" />
                      <span className="relative z-10">{t.launchingDreams}</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">{t.launchMyFreeVPS}</span>
                      <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-border/50 glass-effect relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl relative">
                  <img
                    src="/eclipse-systems-logo.png"
                    alt="Eclipse Systems Logo"
                    className="w-full h-full object-cover pixelated"
                  />
                  <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Eclipse Systems</h3>
                  <p className="text-muted-foreground">VPS Initiative</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground max-w-md">
                {t.makingHostingAccessible}
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">{t.resources}</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t.documentation}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t.gettingStarted}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t.sshSetupGuide}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t.wireguardTutorial}
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:text-primary transition-colors">
                    {t.privacyPolicy}
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="hover:text-primary transition-colors">
                    {t.termsOfService}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">{t.community}</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t.discordServer}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t.github}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t.statusPage}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t.support}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border/50">
            <div className="flex flex-col items-center space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/eclipsesys/vps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>{t.starUsOnGithub}</span>
                </a>
                {githubStars !== null && (
                  <div className="flex items-center space-x-1 bg-primary/10 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-primary fill-current" />
                    <span className="text-sm font-medium text-primary">{githubStars}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground">
                {t.copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
