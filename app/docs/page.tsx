"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Terminal,
  Key,
  Shield,
  Server,
  Copy,
  Check,
  ExternalLink,
  Download,
  AlertCircle,
  CheckCircle,
  Info,
} from "lucide-react"

export default function DocumentationPage() {
  const [language, setLanguage] = useState("en")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const translations = {
    en: {
      title: "VPS Setup Documentation",
      subtitle: "Complete guide to setting up your Eclipse Systems VPS",
      sshKeys: "SSH Keys",
      wireguard: "WireGuard VPN",
      gettingStarted: "Getting Started",
      troubleshooting: "Troubleshooting",
      sshTitle: "SSH Key Generation",
      sshDescription: "Generate SSH keys for secure server access",
      sshStep1: "1. Generate SSH Key Pair",
      sshStep1Desc: "Create a new SSH key pair on your local machine.",
      sshStep2: "2. Add to SSH Agent",
      sshStep2Desc: "Add your key to the SSH agent for easier management.",
      sshStep3: "3. Copy Public Key",
      sshStep3Desc: "Copy your public key to use in the VPS application.",
      sshNote: "Note: Never share your private key! Only the public key (ending in .pub) should be shared.",
      wgTitle: "WireGuard VPN Setup",
      wgDescription: "Set up WireGuard server on your VPS to provide your IP",
      wgNote: "Note: WireGuard configuration is only required if you're using your own IPv4/IPv6 addresses. If you're using our provided IPv6, you can skip this section.",
      wgStep1: "1. Install WireGuard on Your VPS",
      wgStep1Desc: "Install WireGuard on your VPS server to provide your IP to us.",
      wgWarning: "⚠️ Important Warning: After setting up WireGuard and iptables, you might lose SSH connection to your VPS because all traffic gets redirected to your WireGuard client. Make sure you have alternative access methods (console access, etc.) before proceeding.",
      wgNote2: "Note: This follows the Geo-VM WireGuard server setup guide for setting up your own WireGuard server.",
      wgStep2: "2. Configure Your WireGuard Server",
      wgStep2Desc: "The installation script will guide you through the configuration. You'll get a client configuration file that you need to provide to us.",
      wgStep2Important: "Important: You need to provide us with your complete WireGuard client configuration file. This contains your public key and the server details we need to connect to your VPS.",
      wgStep3: "3. Set Up iptables (Important!)",
      wgStep3Desc: "Configure iptables to redirect traffic to your WireGuard client. Replace <YourVPSIP> with your actual VPS IP address.",
      wgStep3Critical: "Critical: Replace <YourVPSIP> with your actual VPS IP address. This redirects all traffic coming to your VPS to your WireGuard client (10.66.66.2).",
      wgStep4: "4. Start Your WireGuard Server",
      wgStep4Desc: "Start your WireGuard server and verify it's working.",
      wgSuccess: "Success! If your IPv4 shows the VPS IP when you run curl ip.me, your WireGuard server is working correctly and ready to provide your IP to us.",
      gettingStartedTitle: "Getting Started with Your VPS",
      gettingStartedDesc: "Once your VPS is ready, here's how to get started.",
      gsStep1: "1. Connect to Your VPS",
      gsStep1Desc: "Use SSH to connect to your VPS using your private key.",
      gsStep2: "2. Update System",
      gsStep2Desc: "Update your system packages to the latest versions.",
      gsStep3: "3. Install Basic Tools",
      gsStep3Desc: "Install essential tools for development and server management.",
      gsStep4: "4. Configure Firewall",
      gsStep4Desc: "Set up a basic firewall to secure your server.",
      gsStep5: "5. Set Up Your Project",
      gsStep5Desc: "Clone your repository or set up your development environment.",
      troubleshootingTitle: "Troubleshooting",
      troubleshootingDesc: "Common issues and their solutions.",
      sshIssues: "SSH Connection Issues",
      sshIssue1: "Permission Denied",
      sshIssue1Desc: "Check your SSH key permissions and ensure the public key is correctly added to the server.",
      sshIssue2: "Connection Timeout",
      sshIssue2Desc: "Verify the server IP address and check if the SSH service is running.",
      generalIssues: "General VPS Issues",
      generalIssue1: "High CPU/Memory Usage",
      generalIssue1Desc: "Monitor your system resources and identify resource-intensive processes.",
      generalIssue2: "Disk Space Issues",
      generalIssue2Desc: "Check disk usage and clean up unnecessary files.",
      generalIssue3: "Network Connectivity",
      generalIssue3Desc: "Test network connectivity and DNS resolution.",
      copyButton: "Copy",
      copiedButton: "Copied!",
      backToHome: "Back to Home"
    },
    ru: {
      title: "Документация по настройке VPS",
      subtitle: "Полное руководство по настройке вашего VPS Eclipse Systems",
      sshKeys: "SSH Ключи",
      wireguard: "WireGuard VPN",
      gettingStarted: "Начало работы",
      troubleshooting: "Устранение неполадок",
      sshTitle: "Генерация SSH ключей",
      sshDescription: "Создайте SSH ключи для безопасного доступа к серверу",
      sshStep1: "1. Создание пары SSH ключей",
      sshStep1Desc: "Создайте новую пару SSH ключей на вашем локальном компьютере.",
      sshStep2: "2. Добавление в SSH агент",
      sshStep2Desc: "Добавьте ваш ключ в SSH агент для удобного управления.",
      sshStep3: "3. Копирование публичного ключа",
      sshStep3Desc: "Скопируйте ваш публичный ключ для использования в заявке на VPS.",
      sshNote: "Примечание: Никогда не делитесь вашим приватным ключом! Только публичный ключ (заканчивающийся на .pub) должен быть предоставлен.",
      wgTitle: "Настройка WireGuard VPN",
      wgDescription: "Настройте WireGuard сервер на вашем VPS для предоставления вашего IP",
      wgNote: "Примечание: Конфигурация WireGuard требуется только если вы используете собственные IPv4/IPv6 адреса. Если вы используете предоставленный нами IPv6, можете пропустить этот раздел.",
      wgStep1: "1. Установка WireGuard на ваш VPS",
      wgStep1Desc: "Установите WireGuard на ваш VPS сервер для предоставления вашего IP нам.",
      wgWarning: "⚠️ Важное предупреждение: После настройки WireGuard и iptables вы можете потерять SSH соединение с вашим VPS, поскольку весь трафик перенаправляется на ваш WireGuard клиент. Убедитесь, что у вас есть альтернативные методы доступа (консольный доступ и т.д.) перед продолжением.",
      wgNote2: "Примечание: Это следует руководству по настройке WireGuard сервера Geo-VM для настройки вашего собственного WireGuard сервера.",
      wgStep2: "2. Настройка вашего WireGuard сервера",
      wgStep2Desc: "Скрипт установки проведет вас через конфигурацию. Вы получите файл конфигурации клиента, который нужно предоставить нам.",
      wgStep2Important: "Важно: Вам нужно предоставить нам полный файл конфигурации WireGuard клиента. Он содержит ваш публичный ключ и детали сервера, необходимые нам для подключения к вашему VPS.",
      wgStep3: "3. Настройка iptables (Важно!)",
      wgStep3Desc: "Настройте iptables для перенаправления трафика на ваш WireGuard клиент. Замените <YourVPSIP> на ваш фактический IP адрес VPS.",
      wgStep3Critical: "Критично: Замените <YourVPSIP> на ваш фактический IP адрес VPS. Это перенаправляет весь трафик, поступающий на ваш VPS, на ваш WireGuard клиент (10.66.66.2).",
      wgStep4: "4. Запуск вашего WireGuard сервера",
      wgStep4Desc: "Запустите ваш WireGuard сервер и убедитесь, что он работает.",
      wgSuccess: "Успех! Если ваш IPv4 показывает IP VPS при выполнении curl ip.me, ваш WireGuard сервер работает корректно и готов предоставить ваш IP нам.",
      gettingStartedTitle: "Начало работы с вашим VPS",
      gettingStartedDesc: "Как только ваш VPS готов, вот как начать работу.",
      gsStep1: "1. Подключение к вашему VPS",
      gsStep1Desc: "Используйте SSH для подключения к вашему VPS с помощью вашего приватного ключа.",
      gsStep2: "2. Обновление системы",
      gsStep2Desc: "Обновите пакеты системы до последних версий.",
      gsStep3: "3. Установка базовых инструментов",
      gsStep3Desc: "Установите необходимые инструменты для разработки и управления сервером.",
      gsStep4: "4. Настройка файрвола",
      gsStep4Desc: "Настройте базовый файрвол для защиты вашего сервера.",
      gsStep5: "5. Настройка вашего проекта",
      gsStep5Desc: "Клонируйте ваш репозиторий или настройте вашу среду разработки.",
      troubleshootingTitle: "Устранение неполадок",
      troubleshootingDesc: "Распространенные проблемы и их решения.",
      sshIssues: "Проблемы с SSH соединением",
      sshIssue1: "Доступ запрещен",
      sshIssue1Desc: "Проверьте права доступа к вашему SSH ключу и убедитесь, что публичный ключ правильно добавлен на сервер.",
      sshIssue2: "Таймаут соединения",
      sshIssue2Desc: "Проверьте IP адрес сервера и убедитесь, что SSH сервис запущен.",
      generalIssues: "Общие проблемы VPS",
      generalIssue1: "Высокое использование CPU/памяти",
      generalIssue1Desc: "Мониторьте ресурсы системы и определите процессы, интенсивно использующие ресурсы.",
      generalIssue2: "Проблемы с дисковым пространством",
      generalIssue2Desc: "Проверьте использование диска и очистите ненужные файлы.",
      generalIssue3: "Сетевое подключение",
      generalIssue3Desc: "Проверьте сетевое подключение и разрешение DNS.",
      copyButton: "Копировать",
      copiedButton: "Скопировано!",
      backToHome: "Назад на главную"
    },
    de: {
      title: "VPS-Setup-Dokumentation",
      subtitle: "Vollständige Anleitung zur Einrichtung Ihres Eclipse Systems VPS",
      sshKeys: "SSH-Schlüssel",
      wireguard: "WireGuard VPN",
      gettingStarted: "Erste Schritte",
      troubleshooting: "Fehlerbehebung",
      sshTitle: "SSH-Schlüssel-Generierung",
      sshDescription: "Generieren Sie SSH-Schlüssel für sicheren Serverzugriff",
      sshStep1: "1. SSH-Schlüsselpaar generieren",
      sshStep1Desc: "Erstellen Sie ein neues SSH-Schlüsselpaar auf Ihrem lokalen Computer.",
      sshStep2: "2. Zum SSH-Agent hinzufügen",
      sshStep2Desc: "Fügen Sie Ihren Schlüssel zum SSH-Agent für einfachere Verwaltung hinzu.",
      sshStep3: "3. Öffentlichen Schlüssel kopieren",
      sshStep3Desc: "Kopieren Sie Ihren öffentlichen Schlüssel für die VPS-Bewerbung.",
      sshNote: "Hinweis: Teilen Sie niemals Ihren privaten Schlüssel! Nur der öffentliche Schlüssel (endet mit .pub) sollte geteilt werden.",
      wgTitle: "WireGuard VPN-Einrichtung",
      wgDescription: "Richten Sie einen WireGuard-Server auf Ihrem VPS ein, um Ihre IP bereitzustellen",
      wgNote: "Hinweis: WireGuard-Konfiguration ist nur erforderlich, wenn Sie Ihre eigenen IPv4/IPv6-Adressen verwenden. Wenn Sie unser bereitgestelltes IPv6 verwenden, können Sie diesen Abschnitt überspringen.",
      wgStep1: "1. WireGuard auf Ihrem VPS installieren",
      wgStep1Desc: "Installieren Sie WireGuard auf Ihrem VPS-Server, um Ihre IP uns zur Verfügung zu stellen.",
      wgWarning: "⚠️ Wichtige Warnung: Nach der Einrichtung von WireGuard und iptables könnten Sie die SSH-Verbindung zu Ihrem VPS verlieren, da der gesamte Datenverkehr an Ihren WireGuard-Client weitergeleitet wird. Stellen Sie sicher, dass Sie alternative Zugriffsmethoden (Konsolenzugriff usw.) haben, bevor Sie fortfahren.",
      wgNote2: "Hinweis: Dies folgt der Geo-VM WireGuard-Server-Setup-Anleitung für die Einrichtung Ihres eigenen WireGuard-Servers.",
      wgStep2: "2. Ihren WireGuard-Server konfigurieren",
      wgStep2Desc: "Das Installationsskript führt Sie durch die Konfiguration. Sie erhalten eine Client-Konfigurationsdatei, die Sie uns zur Verfügung stellen müssen.",
      wgStep2Important: "Wichtig: Sie müssen uns Ihre vollständige WireGuard-Client-Konfigurationsdatei zur Verfügung stellen. Diese enthält Ihren öffentlichen Schlüssel und die Serverdetails, die wir für die Verbindung zu Ihrem VPS benötigen.",
      wgStep3: "3. iptables einrichten (Wichtig!)",
      wgStep3Desc: "Konfigurieren Sie iptables, um Datenverkehr an Ihren WireGuard-Client weiterzuleiten. Ersetzen Sie <YourVPSIP> durch Ihre tatsächliche VPS-IP-Adresse.",
      wgStep3Critical: "Kritisch: Ersetzen Sie <YourVPSIP> durch Ihre tatsächliche VPS-IP-Adresse. Dies leitet den gesamten an Ihren VPS eingehenden Datenverkehr an Ihren WireGuard-Client (10.66.66.2) weiter.",
      wgStep4: "4. Ihren WireGuard-Server starten",
      wgStep4Desc: "Starten Sie Ihren WireGuard-Server und überprüfen Sie, ob er funktioniert.",
      wgSuccess: "Erfolg! Wenn Ihr IPv4 die VPS-IP anzeigt, wenn Sie curl ip.me ausführen, funktioniert Ihr WireGuard-Server korrekt und ist bereit, Ihre IP uns zur Verfügung zu stellen.",
      gettingStartedTitle: "Erste Schritte mit Ihrem VPS",
      gettingStartedDesc: "Sobald Ihr VPS bereit ist, hier ist, wie Sie beginnen können.",
      gsStep1: "1. Mit Ihrem VPS verbinden",
      gsStep1Desc: "Verwenden Sie SSH, um sich mit Ihrem VPS mit Ihrem privaten Schlüssel zu verbinden.",
      gsStep2: "2. System aktualisieren",
      gsStep2Desc: "Aktualisieren Sie Ihre Systempakete auf die neuesten Versionen.",
      gsStep3: "3. Grundlegende Tools installieren",
      gsStep3Desc: "Installieren Sie wesentliche Tools für Entwicklung und Serververwaltung.",
      gsStep4: "4. Firewall konfigurieren",
      gsStep4Desc: "Richten Sie eine grundlegende Firewall ein, um Ihren Server zu sichern.",
      gsStep5: "5. Ihr Projekt einrichten",
      gsStep5Desc: "Klonen Sie Ihr Repository oder richten Sie Ihre Entwicklungsumgebung ein.",
      troubleshootingTitle: "Fehlerbehebung",
      troubleshootingDesc: "Häufige Probleme und ihre Lösungen.",
      sshIssues: "SSH-Verbindungsprobleme",
      sshIssue1: "Zugriff verweigert",
      sshIssue1Desc: "Überprüfen Sie Ihre SSH-Schlüsselberechtigungen und stellen Sie sicher, dass der öffentliche Schlüssel korrekt zum Server hinzugefügt wurde.",
      sshIssue2: "Verbindungstimeout",
      sshIssue2Desc: "Überprüfen Sie die Server-IP-Adresse und stellen Sie sicher, dass der SSH-Service läuft.",
      generalIssues: "Allgemeine VPS-Probleme",
      generalIssue1: "Hohe CPU/Speicher-Nutzung",
      generalIssue1Desc: "Überwachen Sie Ihre Systemressourcen und identifizieren Sie ressourcenintensive Prozesse.",
      generalIssue2: "Festplattenspeicher-Probleme",
      generalIssue2Desc: "Überprüfen Sie die Festplattennutzung und bereinigen Sie unnötige Dateien.",
      generalIssue3: "Netzwerkverbindung",
      generalIssue3Desc: "Testen Sie die Netzwerkverbindung und DNS-Auflösung.",
      copyButton: "Kopieren",
      copiedButton: "Kopiert!",
      backToHome: "Zurück zur Startseite"
    },
    ja: {
      title: "VPSセットアップドキュメント",
      subtitle: "Eclipse Systems VPSのセットアップ完全ガイド",
      sshKeys: "SSHキー",
      wireguard: "WireGuard VPN",
      gettingStarted: "はじめに",
      troubleshooting: "トラブルシューティング",
      sshTitle: "SSHキー生成",
      sshDescription: "安全なサーバーアクセスのためのSSHキーを生成",
      sshStep1: "1. SSHキーペアの生成",
      sshStep1Desc: "ローカルマシンで新しいSSHキーペアを作成します。",
      sshStep2: "2. SSHエージェントに追加",
      sshStep2Desc: "キーをSSHエージェントに追加して管理を簡単にします。",
      sshStep3: "3. 公開キーのコピー",
      sshStep3Desc: "VPSアプリケーションで使用する公開キーをコピーします。",
      sshNote: "注意：秘密キーは絶対に共有しないでください！公開キー（.pubで終わるもの）のみを共有してください。",
      wgTitle: "WireGuard VPNセットアップ",
      wgDescription: "VPSにWireGuardサーバーをセットアップしてIPを提供",
      wgNote: "注意：WireGuard設定は、独自のIPv4/IPv6アドレスを使用する場合にのみ必要です。提供されたIPv6を使用する場合は、このセクションをスキップできます。",
      wgStep1: "1. VPSにWireGuardをインストール",
      wgStep1Desc: "VPSサーバーにWireGuardをインストールして、IPを提供します。",
      wgWarning: "⚠️ 重要な警告：WireGuardとiptablesの設定後、すべてのトラフィックがWireGuardクライアントにリダイレクトされるため、VPSへのSSH接続を失う可能性があります。続行する前に、代替アクセス方法（コンソールアクセスなど）があることを確認してください。",
      wgNote2: "注意：これは独自のWireGuardサーバーのセットアップのためのGeo-VM WireGuardサーバーセットアップガイドに従います。",
      wgStep2: "2. WireGuardサーバーの設定",
      wgStep2Desc: "インストールスクリプトが設定をガイドします。提供する必要があるクライアント設定ファイルを取得します。",
      wgStep2Important: "重要：完全なWireGuardクライアント設定ファイルを提供する必要があります。これには、VPSに接続するために必要な公開キーとサーバーの詳細が含まれています。",
      wgStep3: "3. iptablesの設定（重要！）",
      wgStep3Desc: "トラフィックをWireGuardクライアントにリダイレクトするようにiptablesを設定します。<YourVPSIP>を実際のVPS IPアドレスに置き換えてください。",
      wgStep3Critical: "重要：<YourVPSIP>を実際のVPS IPアドレスに置き換えてください。これにより、VPSに来るすべてのトラフィックがWireGuardクライアント（10.66.66.2）にリダイレクトされます。",
      wgStep4: "4. WireGuardサーバーの開始",
      wgStep4Desc: "WireGuardサーバーを開始し、動作していることを確認します。",
      wgSuccess: "成功！curl ip.meを実行したときにIPv4がVPS IPを表示する場合、WireGuardサーバーが正しく動作しており、IPを提供する準備ができています。",
      gettingStartedTitle: "VPSの開始",
      gettingStartedDesc: "VPSの準備ができたら、開始方法は以下の通りです。",
      gsStep1: "1. VPSに接続",
      gsStep1Desc: "秘密キーを使用してSSHでVPSに接続します。",
      gsStep2: "2. システムの更新",
      gsStep2Desc: "システムパッケージを最新バージョンに更新します。",
      gsStep3: "3. 基本ツールのインストール",
      gsStep3Desc: "開発とサーバー管理に必要なツールをインストールします。",
      gsStep4: "4. ファイアウォールの設定",
      gsStep4Desc: "サーバーを保護するための基本的なファイアウォールを設定します。",
      gsStep5: "5. プロジェクトの設定",
      gsStep5Desc: "リポジトリをクローンするか、開発環境を設定します。",
      troubleshootingTitle: "トラブルシューティング",
      troubleshootingDesc: "一般的な問題とその解決策。",
      sshIssues: "SSH接続の問題",
      sshIssue1: "アクセス拒否",
      sshIssue1Desc: "SSHキーの権限を確認し、公開キーがサーバーに正しく追加されていることを確認してください。",
      sshIssue2: "接続タイムアウト",
      sshIssue2Desc: "サーバーのIPアドレスを確認し、SSHサービスが実行されていることを確認してください。",
      generalIssues: "一般的なVPSの問題",
      generalIssue1: "高いCPU/メモリ使用率",
      generalIssue1Desc: "システムリソースを監視し、リソース集約的なプロセスを特定します。",
      generalIssue2: "ディスク容量の問題",
      generalIssue2Desc: "ディスク使用量を確認し、不要なファイルをクリーンアップします。",
      generalIssue3: "ネットワーク接続",
      generalIssue3Desc: "ネットワーク接続とDNS解決をテストします。",
      copyButton: "コピー",
      copiedButton: "コピーしました！",
      backToHome: "ホームに戻る"
    },
    zh: {
      title: "VPS设置文档",
      subtitle: "Eclipse Systems VPS设置完整指南",
      sshKeys: "SSH密钥",
      wireguard: "WireGuard VPN",
      gettingStarted: "入门指南",
      troubleshooting: "故障排除",
      sshTitle: "SSH密钥生成",
      sshDescription: "生成SSH密钥以安全访问服务器",
      sshStep1: "1. 生成SSH密钥对",
      sshStep1Desc: "在本地计算机上创建新的SSH密钥对。",
      sshStep2: "2. 添加到SSH代理",
      sshStep2Desc: "将您的密钥添加到SSH代理以便于管理。",
      sshStep3: "3. 复制公钥",
      sshStep3Desc: "复制您的公钥以在VPS申请中使用。",
      sshNote: "注意：永远不要分享您的私钥！只有公钥（以.pub结尾）应该被分享。",
      wgTitle: "WireGuard VPN设置",
      wgDescription: "在您的VPS上设置WireGuard服务器以提供您的IP",
      wgNote: "注意：只有在使用您自己的IPv4/IPv6地址时才需要WireGuard配置。如果您使用我们提供的IPv6，可以跳过此部分。",
      wgStep1: "1. 在您的VPS上安装WireGuard",
      wgStep1Desc: "在您的VPS服务器上安装WireGuard以向我们提供您的IP。",
      wgWarning: "⚠️ 重要警告：设置WireGuard和iptables后，您可能会失去与VPS的SSH连接，因为所有流量都被重定向到您的WireGuard客户端。在继续之前，请确保您有替代访问方法（控制台访问等）。",
      wgNote2: "注意：这遵循Geo-VM WireGuard服务器设置指南来设置您自己的WireGuard服务器。",
      wgStep2: "2. 配置您的WireGuard服务器",
      wgStep2Desc: "安装脚本将引导您完成配置。您将获得需要提供给我们的客户端配置文件。",
      wgStep2Important: "重要：您需要向我们提供完整的WireGuard客户端配置文件。这包含您的公钥和我们连接您的VPS所需的服务器详细信息。",
      wgStep3: "3. 设置iptables（重要！）",
      wgStep3Desc: "配置iptables将流量重定向到您的WireGuard客户端。将<YourVPSIP>替换为您的实际VPS IP地址。",
      wgStep3Critical: "关键：将<YourVPSIP>替换为您的实际VPS IP地址。这将把所有到达您VPS的流量重定向到您的WireGuard客户端（10.66.66.2）。",
      wgStep4: "4. 启动您的WireGuard服务器",
      wgStep4Desc: "启动您的WireGuard服务器并验证它是否正常工作。",
      wgSuccess: "成功！当您运行curl ip.me时，如果您的IPv4显示VPS IP，您的WireGuard服务器正常工作并准备向我们提供您的IP。",
      gettingStartedTitle: "VPS入门",
      gettingStartedDesc: "一旦您的VPS准备就绪，以下是开始的方法。",
      gsStep1: "1. 连接到您的VPS",
      gsStep1Desc: "使用SSH和您的私钥连接到您的VPS。",
      gsStep2: "2. 更新系统",
      gsStep2Desc: "将系统包更新到最新版本。",
      gsStep3: "3. 安装基本工具",
      gsStep3Desc: "安装开发和服务器管理的基本工具。",
      gsStep4: "4. 配置防火墙",
      gsStep4Desc: "设置基本防火墙以保护您的服务器。",
      gsStep5: "5. 设置您的项目",
      gsStep5Desc: "克隆您的存储库或设置您的开发环境。",
      troubleshootingTitle: "故障排除",
      troubleshootingDesc: "常见问题及其解决方案。",
      sshIssues: "SSH连接问题",
      sshIssue1: "访问被拒绝",
      sshIssue1Desc: "检查您的SSH密钥权限并确保公钥已正确添加到服务器。",
      sshIssue2: "连接超时",
      sshIssue2Desc: "验证服务器IP地址并检查SSH服务是否正在运行。",
      generalIssues: "一般VPS问题",
      generalIssue1: "高CPU/内存使用率",
      generalIssue1Desc: "监控系统资源并识别资源密集型进程。",
      generalIssue2: "磁盘空间问题",
      generalIssue2Desc: "检查磁盘使用情况并清理不必要的文件。",
      generalIssue3: "网络连接",
      generalIssue3Desc: "测试网络连接和DNS解析。",
      copyButton: "复制",
      copiedButton: "已复制！",
      backToHome: "返回首页"
    }
  }

  const t = translations[language as keyof typeof translations] || translations.en

  const CodeBlock = ({ children, id, title }: { children: string, id: string, title?: string }) => (
    <div className="relative">
      {title && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">{title}</span>
        </div>
      )}
      <div className="relative bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
        <pre className="whitespace-pre-wrap">{children}</pre>
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 p-0"
          onClick={() => copyToClipboard(children, id)}
        >
          {copiedCode === id ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  )

  const InfoBox = ({ type, children }: { type: "info" | "warning" | "success", children: React.ReactNode }) => {
    const icons = {
      info: <Info className="w-5 h-5 text-blue-500" />,
      warning: <AlertCircle className="w-5 h-5 text-yellow-500" />,
      success: <CheckCircle className="w-5 h-5 text-green-500" />,
    }
    
    const colors = {
      info: "bg-blue-50 border-blue-200 text-blue-800",
      warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
      success: "bg-green-50 border-green-200 text-green-800",
    }

    return (
      <div className={`p-4 rounded-lg border ${colors[type]} flex items-start space-x-3`}>
        {icons[type]}
        <div className="text-sm">{children}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 glass-effect sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-xl relative">
              <img
                src="/eclipse-systems-logo.png"
                alt="Eclipse Systems Logo"
                className="w-full h-full object-cover pixelated"
              />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Eclipse Systems</h1>
              <p className="text-sm text-muted-foreground">VPS Initiative Documentation</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-32 bg-background/80 backdrop-blur-sm border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ru">Русский</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="ja">日本語</SelectItem>
                <SelectItem value="zh">中文</SelectItem>
              </SelectContent>
            </Select>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
          >
            ← Back to VPS Initiative
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            <Server className="w-4 h-4 mr-2" />
            Documentation
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <Tabs defaultValue="ssh" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="ssh" className="flex items-center space-x-2">
              <Key className="w-4 h-4" />
              <span>{t.sshKeys}</span>
            </TabsTrigger>
            <TabsTrigger value="wireguard" className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>{t.wireguard}</span>
            </TabsTrigger>
            <TabsTrigger value="getting-started" className="flex items-center space-x-2">
              <Server className="w-4 h-4" />
              <span>{t.gettingStarted}</span>
            </TabsTrigger>
            <TabsTrigger value="troubleshooting" className="flex items-center space-x-2">
              <Terminal className="w-4 h-4" />
              <span>{t.troubleshooting}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ssh" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Key className="w-6 h-6 text-primary" />
                  <span>{t.sshTitle}</span>
                </CardTitle>
                <CardDescription>
                  {t.sshDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">1. Generate SSH Key Pair</h3>
                  <p className="text-muted-foreground mb-4">
                    First, generate a new SSH key pair on your local machine. We recommend using Ed25519 for better security.
                  </p>
                  
                  <CodeBlock id="ssh-generate" title="Generate Ed25519 SSH Key">
{`# Generate Ed25519 key (recommended)
ssh-keygen -t ed25519 -C "your-email@example.com"

# Or generate RSA key (if Ed25519 not supported)
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"`}
                  </CodeBlock>

                  <InfoBox type="info">
                    <strong>Note:</strong> When prompted for a file location, press Enter to use the default location (~/.ssh/id_ed25519). 
                    You can optionally set a passphrase for additional security.
                  </InfoBox>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">2. Copy Your Public Key</h3>
                  <p className="text-muted-foreground mb-4">
                    Copy your public key to use in the VPS application form.
                  </p>
                  
                  <CodeBlock id="ssh-copy" title="Copy Public Key">
{`# For Ed25519 key
cat ~/.ssh/id_ed25519.pub

# For RSA key
cat ~/.ssh/id_rsa.pub`}
                  </CodeBlock>

                  <InfoBox type="warning">
                    <strong>Important:</strong> Only copy the PUBLIC key (the one ending in .pub). 
                    Never share your private key with anyone!
                  </InfoBox>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">3. Test Your Key</h3>
                  <p className="text-muted-foreground mb-4">
                    Once your VPS is ready, test the connection.
                  </p>
                  
                  <CodeBlock id="ssh-test" title="Test SSH Connection">
{`# Connect to your VPS (replace with your actual VPS IP)
ssh root@your-vps-ip-address

# If using a custom port
ssh -p port root@your-vps-ip-address`}
                  </CodeBlock>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wireguard" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-primary" />
                  <span>WireGuard VPN Setup</span>
                </CardTitle>
                <CardDescription>
                  Configure WireGuard to route your IPv4/IPv6 addresses through our network.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <InfoBox type="info">
                  <strong>Note:</strong> WireGuard configuration is only required if you're using your own IPv4/IPv6 addresses. 
                  If you're using our provided IPv6, you can skip this section.
                </InfoBox>

                 <div>
                   <h3 className="text-lg font-semibold mb-4">1. Install WireGuard on Your VPS</h3>
                   <p className="text-muted-foreground mb-4">
                     Install WireGuard on your VPS server to provide your IP to us.
                   </p>
                   
                   <CodeBlock id="wg-install-ubuntu" title="Ubuntu/Debian VPS">
{`# Install necessary packages
sudo apt -y install curl

# Install WireGuard using the automated script
curl -O https://raw.githubusercontent.com/angristan/wireguard-install/master/wireguard-install.sh
chmod +x wireguard-install.sh
./wireguard-install.sh`}
                   </CodeBlock>

                   <InfoBox type="warning">
                     <strong>⚠️ Important Warning:</strong> After setting up WireGuard and iptables, you might lose SSH connection to your VPS because all traffic gets redirected to your WireGuard client. Make sure you have alternative access methods (console access, etc.) before proceeding.
                   </InfoBox>

                   <InfoBox type="info">
                     <strong>Note:</strong> This follows the <a href="https://docs.geo-vm.net/tutorials/wireguard-tunnel#server-side" target="_blank" className="text-primary hover:underline">Geo-VM WireGuard server setup guide</a> for setting up your own WireGuard server.
                   </InfoBox>

                 </div>

                 <div>
                   <h3 className="text-lg font-semibold mb-4">2. Configure Your WireGuard Server</h3>
                   <p className="text-muted-foreground mb-4">
                     The installation script will guide you through the configuration. You'll get a client configuration file that you need to provide to us.
                   </p>
                   
                   <CodeBlock id="wg-config-location" title="Find Your Configuration">
{`# The script creates a client config file in /root/
# Look for files like: /root/wg0-client-*.conf

# List all WireGuard config files
ls -la /root/wg0-client-*.conf

# View your client configuration (this is what you'll share with us)
cat /root/wg0-client-*.conf`}
                   </CodeBlock>

                   <InfoBox type="warning">
                     <strong>Important:</strong> You need to provide us with your complete WireGuard client configuration file. 
                     This contains your public key and the server details we need to connect to your VPS.
                   </InfoBox>
                 </div>

                 <div>
                   <h3 className="text-lg font-semibold mb-4">3. Set Up iptables (Important!)</h3>
                   <p className="text-muted-foreground mb-4">
                     Configure iptables to redirect traffic to your WireGuard client. Replace &lt;YourVPSIP&gt; with your actual VPS IP address.
                   </p>
                   
                   <CodeBlock id="wg-iptables" title="Configure iptables">
{`# Replace <YourVPSIP> with your actual VPS IP address
iptables -t nat -A PREROUTING -d <YourVPSIP> -p tcp -j DNAT --to-dest 10.66.66.2

# Make iptables persistent
sudo apt -y install iptables-persistent
netfilter-persistent save
sudo netfilter-persistent reload`}
                   </CodeBlock>

                   <InfoBox type="warning">
                     <strong>Critical:</strong> Replace &lt;YourVPSIP&gt; with your actual VPS IP address. 
                     This redirects all traffic coming to your VPS to your WireGuard client (10.66.66.2).
                   </InfoBox>
                 </div>

                 <div>
                   <h3 className="text-lg font-semibold mb-4">4. Start Your WireGuard Server</h3>
                  <p className="text-muted-foreground mb-4">
                    Start your WireGuard server and verify it's working.
                  </p>
                  
                  <CodeBlock id="wg-start" title="Start WireGuard Server">
{`# Start WireGuard server
systemctl enable wg-quick@wg0.service
systemctl daemon-reload
systemctl start wg-quick@wg0

# Check if it's running
systemctl status wg-quick@wg0.service

# Verify your IP has changed (should show VPS IP)
curl ip.me`}
                  </CodeBlock>

                  <InfoBox type="success">
                    <strong>Success!</strong> If your IPv4 shows the VPS IP when you run <code>curl ip.me</code>, 
                    your WireGuard server is working correctly and ready to provide your IP to us.
                  </InfoBox>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="getting-started" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Server className="w-6 h-6 text-primary" />
                  <span>Getting Started with Your VPS</span>
                </CardTitle>
                <CardDescription>
                  First steps after receiving your VPS access credentials.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">1. Initial Connection</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect to your VPS for the first time.
                  </p>
                  
                  <CodeBlock id="initial-connect" title="Connect to VPS">
{`# Connect using SSH
ssh root@your-vps-ip-address

# If you need to specify a port
ssh -p 2222 root@your-vps-ip-address`}
                  </CodeBlock>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">2. Update System</h3>
                  <p className="text-muted-foreground mb-4">
                    Update your VPS to the latest packages.
                  </p>
                  
                  <CodeBlock id="update-system" title="Update System">
{`# Update package lists
apt update

# Upgrade packages
apt upgrade -y

# Install essential tools
apt install -y curl wget git vim nano htop`}
                  </CodeBlock>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">3. Configure Firewall</h3>
                  <p className="text-muted-foreground mb-4">
                    Set up basic firewall rules for security.
                  </p>
                  
                  <CodeBlock id="firewall-setup" title="Configure UFW Firewall">
{`# Install UFW
apt install -y ufw

# Allow SSH
ufw allow ssh

# Allow HTTP and HTTPS
ufw allow 80
ufw allow 443

# Enable firewall
ufw --force enable

# Check status
ufw status`}
                  </CodeBlock>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">4. Create Non-Root User</h3>
                  <p className="text-muted-foreground mb-4">
                    Create a regular user for daily operations.
                  </p>
                  
                  <CodeBlock id="create-user" title="Create User">
{`# Create new user
adduser yourusername

# Add to sudo group
usermod -aG sudo yourusername

# Switch to new user
su - yourusername`}
                  </CodeBlock>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">5. Install Common Services</h3>
                  <p className="text-muted-foreground mb-4">
                    Install popular services you might need.
                  </p>
                  
                  <CodeBlock id="install-services" title="Install Services">
{`# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Install Python
apt install -y python3 python3-pip

# Install Nginx
apt install -y nginx`}
                  </CodeBlock>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="troubleshooting" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Terminal className="w-6 h-6 text-primary" />
                  <span>Troubleshooting Common Issues</span>
                </CardTitle>
                <CardDescription>
                  Solutions to common problems you might encounter.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">SSH Connection Issues</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Permission Denied (publickey)</h4>
                      <p className="text-muted-foreground mb-2">
                        This usually means your SSH key isn't properly configured.
                      </p>
                      <CodeBlock id="ssh-debug" title="Debug SSH Connection">
{`# Test SSH connection with verbose output
ssh -v root@your-vps-ip-address

# Check if your key is being used
ssh -i ~/.ssh/id_ed25519 root@your-vps-ip-address`}
                      </CodeBlock>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Connection Refused</h4>
                      <p className="text-muted-foreground mb-2">
                        The VPS might be down or the IP address is incorrect.
                      </p>
                      <CodeBlock id="ping-test" title="Test Connectivity">
{`# Ping the server
ping your-vps-ip-address

# Test if SSH port is open
telnet your-vps-ip-address 22`}
                      </CodeBlock>
                    </div>
                  </div>
                </div>


                <div>
                  <h3 className="text-lg font-semibold mb-4">General VPS Issues</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">High CPU/Memory Usage</h4>
                      <CodeBlock id="check-resources" title="Check Resource Usage">
{`# Check system resources
htop

# Check disk usage
df -h

# Check memory usage
free -h`}
                      </CodeBlock>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Service Won't Start</h4>
                      <CodeBlock id="check-services" title="Check Service Status">
{`# Check service status
systemctl status service-name

# View service logs
journalctl -u service-name -f

# Restart service
systemctl restart service-name`}
                      </CodeBlock>
                    </div>
                  </div>
                </div>

                <InfoBox type="success">
                  <strong>Need More Help?</strong> If you're still having issues, contact our support team at 
                  <a href="mailto:support@eclipsesystems.top" className="text-primary hover:underline">
                    support@eclipsesystems.top
                  </a> or join our Discord server for community support.
                </InfoBox>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
