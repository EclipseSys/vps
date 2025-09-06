"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
            Eclipse Systems VPS Setup Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete guide to setting up your free VPS, including WireGuard configuration, SSH keys, and getting started.
          </p>
        </div>

        <Tabs defaultValue="ssh" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="ssh" className="flex items-center space-x-2">
              <Key className="w-4 h-4" />
              <span>SSH Keys</span>
            </TabsTrigger>
            <TabsTrigger value="wireguard" className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>WireGuard</span>
            </TabsTrigger>
            <TabsTrigger value="getting-started" className="flex items-center space-x-2">
              <Server className="w-4 h-4" />
              <span>Getting Started</span>
            </TabsTrigger>
            <TabsTrigger value="troubleshooting" className="flex items-center space-x-2">
              <Terminal className="w-4 h-4" />
              <span>Troubleshooting</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ssh" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Key className="w-6 h-6 text-primary" />
                  <span>SSH Key Generation & Setup</span>
                </CardTitle>
                <CardDescription>
                  Learn how to generate and configure SSH keys for secure access to your VPS.
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
                  <h3 className="text-lg font-semibold mb-4">1. Install WireGuard</h3>
                  <p className="text-muted-foreground mb-4">
                    Install WireGuard on your local machine.
                  </p>
                  
                  <CodeBlock id="wg-install-ubuntu" title="Ubuntu/Debian">
{`sudo apt update
sudo apt install wireguard`}
                  </CodeBlock>

                  <CodeBlock id="wg-install-macos" title="macOS">
{`# Using Homebrew
brew install wireguard-tools`}
                  </CodeBlock>

                  <CodeBlock id="wg-install-windows" title="Windows">
{`# Download from https://www.wireguard.com/install/`}
                  </CodeBlock>
                </div>

                 <div>
                   <h3 className="text-lg font-semibold mb-4">2. Generate WireGuard Keys</h3>
                   <p className="text-muted-foreground mb-4">
                     Generate your private and public keys for WireGuard. You'll need to provide us with your PUBLIC key.
                   </p>
                   
                   <CodeBlock id="wg-keys" title="Generate WireGuard Keys">
{`# Generate private key
wg genkey | tee privatekey | wg pubkey > publickey

# View your keys
echo "Private key (keep this secret!):"
cat privatekey
echo "Public key (send this to us):"
cat publickey`}
                   </CodeBlock>

                   <InfoBox type="warning">
                     <strong>Important:</strong> You need to provide us with your PUBLIC key (not the private key). 
                     We'll use your public key to configure our server to accept your connection.
                   </InfoBox>
                 </div>

                 <div>
                   <h3 className="text-lg font-semibold mb-4">3. Create WireGuard Configuration</h3>
                   <p className="text-muted-foreground mb-4">
                     Create a configuration file for your WireGuard tunnel. Use the 10.0.0.x/24 format for the Address field.
                   </p>
                   
                   <CodeBlock id="wg-config" title="WireGuard Configuration Template">
{`[Interface]
# Your private key (keep this secret!)
PrivateKey = YOUR_PRIVATE_KEY_HERE
# Your local IP address (use 10.0.0.x/24 format)
Address = 10.0.0.2/24
# DNS servers (optional)
DNS = 1.1.1.1, 8.8.8.8

[Peer]
# Your own public key (the one you generated above)
PublicKey = YOUR_PUBLIC_KEY_HERE
# Our server's endpoint
Endpoint = vps.eclipsesystems.top:51820
# Allowed IPs (route all traffic through the tunnel)
AllowedIPs = 0.0.0.0/0, ::/0
# Keep connection alive
PersistentKeepalive = 25`}
                   </CodeBlock>

                   <InfoBox type="warning">
                     <strong>Important:</strong> In the [Peer] section, use YOUR OWN public key (the one you generated in step 2). 
                     We'll configure our server to accept connections from your public key.
                   </InfoBox>
                 </div>

                 <div>
                   <h3 className="text-lg font-semibold mb-4">4. Start WireGuard</h3>
                  <p className="text-muted-foreground mb-4">
                    Start your WireGuard tunnel.
                  </p>
                  
                  <CodeBlock id="wg-start" title="Start WireGuard">
{`# Start WireGuard (Linux/macOS)
sudo wg-quick up wg0

# Or start with specific config file
sudo wg-quick up /path/to/your/config.conf

# Check status
sudo wg show`}
                  </CodeBlock>
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
                  <h3 className="text-lg font-semibold mb-4">WireGuard Issues</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Tunnel Not Working</h4>
                      <p className="text-muted-foreground mb-2">
                        Check your WireGuard configuration and connection.
                      </p>
                      <CodeBlock id="wg-debug" title="Debug WireGuard">
{`# Check WireGuard status
sudo wg show

# Check if interface is up
ip addr show wg0

# Test connectivity through tunnel
ping 8.8.8.8`}
                      </CodeBlock>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Configuration Errors</h4>
                      <p className="text-muted-foreground mb-2">
                        Verify your configuration file syntax.
                      </p>
                      <CodeBlock id="wg-check-config" title="Check Configuration">
{`# Test configuration file
sudo wg-quick up /path/to/config.conf --dry-run`}
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
