"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Mail, Globe, Users, Lock, FileText, AlertTriangle } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            <Shield className="w-4 h-4 mr-2" />
            Legal Documents
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground mb-6">
            How we collect, use, and protect your data
          </p>
          
          {/* Quick Summary */}
          <div className="glass-effect rounded-2xl p-6 border border-accent/30 bg-accent/5 max-w-4xl mx-auto">
                         <h2 className="text-lg font-semibold text-foreground mb-4">Quick Summary</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <p><strong>Controller:</strong> Eclipse Systems VPS Initiative</p>
                <p><strong>Contact:</strong> legal@eclipsesystems.top</p>
                <p><strong>Address:</strong> Germany, Berlin</p>
                <p><strong>Status:</strong> Volunteer-run, non-commercial hobby project</p>
              </div>
              <div>
                <p><strong>Data:</strong> Limited collection for service provision</p>
                <p><strong>Rights:</strong> Full GDPR rights including access and deletion</p>
                <p><strong>Law:</strong> German law (BDSG) with EU protections</p>
                <p><strong>Retention:</strong> Data deleted when no longer needed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Content */}
        <Card className="glass-effect border-2 border-border shadow-2xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl text-foreground flex items-center justify-center space-x-3">
              <div className="w-12 h-12 cosmic-gradient rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span>Eclipse Systems VPS Initiative</span>
            </CardTitle>
            <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
              <span>Effective: August 19, 2025</span>
              <span>•</span>
              <span>Last Updated: August 19, 2025</span>
            </div>
          </CardHeader>

          <CardContent className="space-y-8 px-8 pb-8">
            {/* 1. Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <div className="glass-effect rounded-2xl p-6 border border-primary/30 bg-primary/5">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Important Notice</h3>
                    <p className="text-sm text-muted-foreground">This is a hobby project, not a commercial service</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Eclipse Systems VPS Initiative ("we," "our," or "us") operates the VPS Initiative service. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
                </p>
                <div className="p-4 bg-accent/10 rounded-xl border border-accent/30">
                                     <p className="text-sm text-primary">
                     <strong>Hobby Project:</strong> This is a non-commercial, hobby-run student project. We are not a business, corporation, or commercial entity. This service is provided purely for educational and community purposes with no profit motive. We are located in Germany, Berlin.
                   </p>
                </div>
              </div>
            </section>

            {/* 2. Legal Basis and Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Legal Basis and Compliance</h2>
              <p className="text-muted-foreground mb-4">
                This Privacy Policy is designed to comply with:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• <strong>EU General Data Protection Regulation (GDPR)</strong> (Regulation (EU) 2016/679)</li>
                <li>• <strong>German Federal Data Protection Act (BDSG)</strong> (Bundesdatenschutzgesetz)</li>
                <li>• <strong>UK Data Protection Act 2018</strong> and <strong>UK GDPR</strong></li>
                <li>• <strong>California Consumer Privacy Act (CCPA)</strong> and <strong>California Privacy Rights Act (CPRA)</strong></li>
              </ul>
            </section>

            {/* 3. Data Controller */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Controller</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Eclipse Systems VPS Initiative</h3>
                    <p className="text-sm text-muted-foreground">Primary Contact</p>
                  </div>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> legal@eclipsesystems.top</p>
                  <p><strong>Address:</strong> Germany, Berlin</p>
                  <p><strong>Data Protection Officer:</strong> legal@eclipsesystems.top</p>
                </div>
                <div className="mt-4 p-4 bg-accent/10 rounded-xl">
                                     <p className="text-sm text-primary">
                     <strong>Note:</strong> Eclipse Systems VPS Initiative is a volunteer-run, non-commercial hobby project. It is not a registered company or legal entity and does not have employees.
                   </p>
                </div>
              </div>
            </section>

            {/* 4. Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Information We Collect</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-effect rounded-2xl p-6 border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Full name</li>
                    <li>• Email address</li>
                    <li>• Organization/Institution</li>
                    <li>• GitHub profile URL (optional)</li>
                    <li>• IP addresses (IPv4/IPv6)</li>
                    <li>• SSH public keys</li>
                    <li>• WireGuard configuration</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-2xl p-6 border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">Technical Information</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• VPS usage patterns</li>
                    <li>• Server performance metrics</li>
                    <li>• Network traffic data</li>
                    <li>• System logs and error reports</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-2xl p-6 border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">Application Information</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Project descriptions</li>
                    <li>• VPS configuration preferences</li>
                    <li>• Purpose of use declarations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. How We Use Your Information</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Primary Purposes</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Provide VPS hosting services</li>
                      <li>• Process your application</li>
                      <li>• Manage your account and services</li>
                      <li>• Provide technical support</li>
                      <li>• Ensure service security and stability</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Legal Basis (GDPR Article 6)</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Contract Performance:</strong> To provide the VPS service you requested</li>
                      <li>• <strong>Legitimate Interest:</strong> To improve our services and ensure security</li>
                      <li>• <strong>Consent:</strong> For optional communications and marketing (if applicable)</li>
                      <li>• <strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Data Sharing and Disclosure */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Sharing and Disclosure</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <div className="space-y-4">
                  <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
                    <h4 className="font-bold text-green-600 mb-2">We Do Not Sell Your Data</h4>
                    <p className="text-sm text-muted-foreground">
                      We do not sell, rent, or trade your personal information to third parties.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Limited Sharing</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      We may share your information only with:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                      <li>• <strong>Service Providers:</strong> Infrastructure and hosting partners (under strict data processing agreements)</li>
                      <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                      <li>• <strong>Security:</strong> To prevent fraud, abuse, or illegal activities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Your Rights (GDPR) */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights (GDPR)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-effect rounded-2xl p-6 border border-border/50">
                  <h3 className="font-semibold text-foreground mb-3">Access and Portability</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Right to access your personal data</li>
                    <li>• Right to receive your data in a portable format</li>
                    <li>• Right to know how your data is processed</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-2xl p-6 border border-border/50">
                  <h3 className="font-semibold text-foreground mb-3">Rectification and Erasure</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Right to correct inaccurate data</li>
                    <li>• Right to delete your data ("right to be forgotten")</li>
                    <li>• Right to restrict processing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 8. California Privacy Rights (CCPA/CPRA) */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. California Privacy Rights (CCPA/CPRA)</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">
                  If you are a California resident, you have additional rights:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Right to know what personal information is collected</li>
                  <li>• Right to delete personal information</li>
                  <li>• Right to opt-out of the sale of personal information</li>
                  <li>• Right to non-discrimination for exercising your rights</li>
                </ul>
                <div className="mt-4 p-4 bg-primary/10 rounded-xl">
                  <p className="text-sm text-primary">
                    <strong>Contact:</strong> legal@eclipsesystems.top
                  </p>
                </div>
              </div>
            </section>

            {/* 9. Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Data Security</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Security Measures</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Encryption of data in transit and at rest</li>
                      <li>• Access controls and authentication</li>
                      <li>• Regular security audits and monitoring</li>
                      <li>• Employee training on data protection</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Breach Notification</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• We will notify you within 72 hours of any data breach</li>
                      <li>• We will report breaches to relevant authorities as required</li>
                      <li>• We will provide detailed information about the breach and mitigation steps</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. Governing Law and Jurisdiction */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law and Jurisdiction</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <h3 className="font-semibold text-foreground mb-3">Primary Jurisdiction</h3>
                <p className="text-muted-foreground mb-4">
                  This Privacy Policy is governed by and construed in accordance with <strong>German law (BDSG)</strong>, with specific compliance with:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
                  <li>• EU GDPR</li>
                  <li>• German BDSG (Bundesdatenschutzgesetz)</li>
                  <li>• UK Data Protection Act 2018</li>
                </ul>
                <div className="p-4 bg-accent/10 rounded-xl">
                                     <p className="text-sm text-primary">
                     <strong>Primary jurisdiction: German courts and law (BDSG)</strong>
                   </p>
                </div>
              </div>
            </section>

            {/* 11. Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">General Inquiries</h3>
                    <p className="text-muted-foreground">
                      <strong>Email:</strong> legal@eclipsesystems.top
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Data Protection Officer</h3>
                    <p className="text-muted-foreground">
                      <strong>Email:</strong> legal@eclipsesystems.top
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-accent/10 rounded-xl">
                                     <p className="text-sm text-primary">
                     <strong>Important Notice:</strong> Eclipse Systems VPS Initiative is a volunteer-run, non-commercial hobby project. It is not a registered company or legal entity and does not have employees.
                   </p>
                </div>
              </div>
            </section>

                         {/* Footer */}
             <div className="text-center pt-8 border-t border-border/50">
               <p className="text-muted-foreground">
                 <strong>Last Updated:</strong> August 19, 2025 | <strong>Version:</strong> 1.0
               </p>
               <p className="text-sm text-muted-foreground mt-2">
                 For questions about this Privacy Policy, contact us at legal@eclipsesystems.top
               </p>
               <div className="mt-4 p-4 bg-accent/10 rounded-xl border border-accent/30">
                 <p className="text-sm text-muted-foreground">
                   <strong>Raw Text Version:</strong> <a href="/privacy-policy.txt" className="text-primary hover:underline">Download as plain text</a>
                 </p>
               </div>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
