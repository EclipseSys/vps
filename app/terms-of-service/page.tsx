"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Mail, AlertTriangle, XCircle, Lock, FileText, Gavel, Globe, Users, Clock, AlertCircle } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            <Gavel className="w-4 h-4 mr-2" />
            Legal Documents
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">Terms of Service and Privacy Policy</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Eclipse Systems VPS Initiative - Hobby Project Terms
          </p>
          
          {/* Quick Summary */}
          <div className="glass-effect rounded-2xl p-6 border border-accent/30 bg-accent/5 max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-accent mb-4">Quick Summary</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <p><strong>Operator:</strong> Volunteer-run, non-commercial hobby project; not a registered company</p>
                <p><strong>Services:</strong> Free VPS hosting for educational and development purposes</p>
                <p><strong>Contact:</strong> legal@eclipsesystems.top</p>
                <p><strong>Address:</strong> Germany, Berlin</p>
              </div>
              <div>
                <p><strong>Privacy:</strong> GDPR compliant with limited data collection</p>
                <p><strong>Law:</strong> German law (BDSG) with EU consumer protections</p>
                <p><strong>Prohibited:</strong> Commercial use, crypto mining, Tor nodes, 100% CPU abuse</p>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Content */}
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
            {/* 1. Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <div className="glass-effect rounded-2xl p-6 border border-primary/30 bg-primary/5">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By using our VPS hosting services, dashboard, or websites (collectively, the "Services"), you ("User" or "Customer") agree to comply with and be bound by these Terms of Service and the accompanying policies. These Terms constitute a legally binding agreement between you and the Eclipse Systems VPS Initiative operators (the "Operator", "We", "Our"). If you do not agree to these Terms, do not use the Services.
                </p>
                <div className="p-4 bg-accent/10 rounded-xl border border-accent/30">
                  <p className="text-sm text-accent">
                    <strong>Important for US residents:</strong> Section 24 contains an arbitration agreement and a class action/jury trial waiver that affects your rights. Please read it carefully.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Definitions */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Definitions</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Services</h3>
                    <p className="text-sm text-muted-foreground">
                      The solutions provided by Eclipse Systems VPS Initiative, including but not limited to: hosting and compute instances ("VPS"), dashboard modules, support system, and any additional features as described in our dashboard or website.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Operator</h3>
                    <p className="text-sm text-muted-foreground">
                      Eclipse Systems VPS Initiative is a volunteer-run, non-commercial hobby project operated by contributors. It is not a registered company or legal entity and has no employees. References to "We" or "Operator" mean the volunteer administrators and moderators who run the project.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Trader Status</h3>
                    <p className="text-sm text-muted-foreground">
                      We do not consider ourselves a commercial trader. However, if under applicable law we are deemed a "trader" or "provider" due to providing services on a regular basis, the consumer protections described in these Terms apply to the extent required by law.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Description of Services */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Description of Services</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground leading-relaxed">
                  Eclipse Systems VPS Initiative provides free virtual private server (VPS) hosting solutions tailored for small and medium-sized educational and development projects. Detailed service descriptions, performance parameters, and any limitations are documented on our website and in our dashboard.
                </p>
              </div>
            </section>

            {/* 4. Eligibility and Account Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Eligibility, Age, and Account Responsibilities</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Eligibility</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Must be 18 years or older</li>
                      <li>• Must be a student, developer, or hobbyist</li>
                      <li>• Must have a legitimate educational use case</li>
                      <li>• Must NOT be a business or commercial entity</li>
                      <li>• Must comply with all applicable laws and regulations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Account Security</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• You are responsible for maintaining the confidentiality of your credentials</li>
                      <li>• You are responsible for all activity under your Account</li>
                      <li>• Notify us immediately of any unauthorized use</li>
                      <li>• Commercial applications will be automatically rejected</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Fair Usage Policy */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Fair Usage Policy</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
                    <h4 className="font-bold text-green-600 mb-2">Resource Usage</h4>
                    <p className="text-sm text-muted-foreground">
                      Users must utilize allocated server resources fairly. No User should continuously run their allocated resources at 100% capacity for more than 2 hours at a time.
                    </p>
                  </div>
                  <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/30">
                    <h4 className="font-bold text-red-600 mb-2">Consequences</h4>
                    <p className="text-sm text-muted-foreground">
                      Excessive or abusive usage in violation of this policy may result in performance throttling, temporary suspension, or termination of service to ensure a stable environment for all users.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Prohibited Activities */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Prohibited Activities</h2>
              <div className="glass-effect rounded-2xl p-6 border-2 border-destructive/50 bg-destructive/5">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-destructive">STRICTLY PROHIBITED - IMMEDIATE TERMINATION</h3>
                    <p className="text-sm text-destructive/80">The following activities will result in immediate account termination</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Tor Nodes */}
                  <div className="p-4 bg-destructive/10 rounded-xl border border-destructive/30">
                    <h4 className="font-bold text-destructive mb-2">TOR EXIT NODES ARE STRICTLY PROHIBITED</h4>
                    <ul className="text-sm text-destructive/90 space-y-1">
                      <li>• Tor relay nodes (entry, middle, or exit)</li>
                      <li>• VPN services for anonymous browsing</li>
                      <li>• Proxy services for illegal activities</li>
                      <li>• Any service designed to hide user identity for malicious purposes</li>
                    </ul>
                  </div>

                  {/* Crypto Mining */}
                  <div className="p-4 bg-destructive/10 rounded-xl border border-destructive/30">
                    <h4 className="font-bold text-destructive mb-2">ALL CRYPTOCURRENCY MINING IS PROHIBITED</h4>
                    <ul className="text-sm text-destructive/90 space-y-1">
                      <li>• Bitcoin, Ethereum, Monero, or any other cryptocurrency mining</li>
                      <li>• Mining pools or mining software</li>
                      <li>• Proof-of-work calculations</li>
                      <li>• Any activity that generates cryptocurrency</li>
                    </ul>
                  </div>

                  {/* Resource Abuse */}
                  <div className="p-4 bg-destructive/10 rounded-xl border border-destructive/30">
                    <h4 className="font-bold text-destructive mb-2">100% CPU USAGE 24/7 IS STRICTLY PROHIBITED</h4>
                    <ul className="text-sm text-destructive/90 space-y-1">
                      <li>• Sustained high CPU usage (&gt;80% for extended periods)</li>
                      <li>• Memory exhaustion or swapping</li>
                      <li>• Disk I/O abuse or storage abuse</li>
                      <li>• Network bandwidth abuse</li>
                    </ul>
                  </div>

                  {/* Commercial Abuse */}
                  <div className="p-4 bg-destructive/10 rounded-xl border border-destructive/30">
                    <h4 className="font-bold text-destructive mb-2">COMMERCIAL USE STRICTLY PROHIBITED</h4>
                    <ul className="text-sm text-destructive/90 space-y-1">
                      <li>• Business hosting or commercial applications</li>
                      <li>• Reselling or redistributing our services</li>
                      <li>• Mass hosting of websites or applications</li>
                      <li>• Business-critical applications</li>
                      <li>• Any profit-generating activities</li>
                    </ul>
                  </div>

                  {/* Other Prohibited */}
                  <div className="p-4 bg-destructive/10 rounded-xl border border-destructive/30">
                    <h4 className="font-bold text-destructive mb-2">Additional Strictly Prohibited Activities</h4>
                    <ul className="text-sm text-destructive/90 space-y-1">
                      <li>• Malware distribution or hosting</li>
                      <li>• Botnet command and control servers</li>
                      <li>• DDoS attacks or network flooding</li>
                      <li>• Any illegal activities or content</li>
                      <li>• Violating applicable laws including German and EU law</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Customer Responsibility */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Customer Responsibility</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">
                  The Customer is solely responsible for all actions, usage, and content on their server and Account. This includes, but is not limited to:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
                  <li>• Installation of software</li>
                  <li>• Configuration of applications</li>
                  <li>• Any activities conducted on or via the server</li>
                </ul>
                <div className="p-4 bg-accent/10 rounded-xl">
                  <p className="text-sm text-accent">
                    <strong>Important:</strong> By using the Services, you acknowledge and accept full responsibility for ensuring that all activities comply with applicable laws, regulations, and these Terms. Eclipse Systems is not liable for any damages, legal liabilities, or penalties arising from activities carried out on your server or Account.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. Data Collection and Privacy (GDPR) */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Data Collection and Privacy (GDPR)</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Controller</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Eclipse Systems VPS Initiative is the controller of your personal data. Contact: legal@eclipsesystems.top
                    </p>
                    <h3 className="font-semibold text-foreground mb-3">Categories of Data</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Email addresses</li>
                      <li>• Full names and usernames</li>
                      <li>• Organization/Institution</li>
                      <li>• GitHub profile URLs (optional)</li>
                      <li>• IP addresses (IPv4/IPv6)</li>
                      <li>• SSH public keys</li>
                      <li>• WireGuard configuration</li>
                      <li>• VPS usage patterns and logs</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Legal Bases</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      We process personal data to perform a contract (to provide the Services), comply with legal obligations, and for our legitimate interests (security, fraud prevention, platform integrity).
                    </p>
                    <h3 className="font-semibold text-foreground mb-3">Your Rights</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Right to access your personal data</li>
                      <li>• Right to rectification and erasure</li>
                      <li>• Right to restrict processing</li>
                      <li>• Right to data portability</li>
                      <li>• Right to object to processing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 9. Privacy and Security Measures */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Privacy and Security Measures</h2>
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
                    <h3 className="font-semibold text-foreground mb-3">Anti-Abuse Monitoring</h3>
                    <p className="text-sm text-muted-foreground">
                      We actively monitor all VPS instances for resource usage patterns, security threats, and compliance with these Terms. This includes 24/7 CPU usage monitoring and automated detection systems.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. Service Level Agreement */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Service Level Agreement (SLA)</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-xl">
                    <div className="text-2xl font-bold text-primary mb-2">90%</div>
                    <p className="text-sm text-muted-foreground">Target Uptime</p>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-xl">
                    <div className="text-2xl font-bold text-accent mb-2">No</div>
                    <p className="text-sm text-muted-foreground">Formal Guarantee</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-xl">
                    <div className="text-2xl font-bold text-primary mb-2">Limited</div>
                    <p className="text-sm text-muted-foreground">Third-Party Control</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-accent/10 rounded-xl">
                  <p className="text-sm text-accent">
                    <strong>Note:</strong> This target is not a formal guarantee, and no contractual warranty is provided regarding uptime or service availability. The SLA is provided solely as an operational benchmark.
                  </p>
                </div>
              </div>
            </section>

            {/* 11. Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Limitation of Liability</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <div className="text-center p-6 bg-accent/10 rounded-xl">
                  <h3 className="text-2xl font-bold text-accent mb-2">TOTAL LIABILITY LIMITED TO €100 (EURO)</h3>
                  <p className="text-muted-foreground">
                    No liability for indirect damages, data loss, service interruptions, or third-party actions. Our Services are provided on an "as is" basis without any guarantees or warranties.
                  </p>
                </div>
              </div>
            </section>

            {/* 12. Governing Law and Jurisdiction */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Governing Law and Jurisdiction</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <h3 className="font-semibold text-foreground mb-3">Primary Jurisdiction</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <h4 className="font-bold text-accent mb-2">Primary: German Courts (BDSG)</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>Governing Law:</strong> German law (Bundesdatenschutzgesetz)<br/>
                      <strong>Dispute Resolution:</strong> German procedures
                    </p>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">Other Jurisdictions</h4>
                    <p className="text-sm text-muted-foreground">
                      • EU: Subject to EU consumer protection laws<br/>
                      • UK: Subject to UK consumer protection laws<br/>
                      • California: Full CCPA/CPRA rights preserved
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 13. US Arbitration Agreement */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. US Residents – Binding Arbitration</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">BINDING INDIVIDUAL ARBITRATION</h4>
                    <p className="text-sm text-muted-foreground">
                      Any dispute shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules.
                    </p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <h4 className="font-bold text-accent mb-2">NO CLASS ACTIONS</h4>
                    <p className="text-sm text-muted-foreground">
                      • No class actions or representative actions<br/>
                      • No consolidation of claims<br/>
                      • Each user must pursue claims individually
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 14. Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact Information</h2>
              <div className="glass-effect rounded-2xl p-6 border border-border/50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">General Inquiries</h3>
                    <p className="text-muted-foreground">
                      <strong>Email:</strong> legal@eclipsesystems.top
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Legal Department</h3>
                    <p className="text-muted-foreground">
                      <strong>Email:</strong> legal@eclipsesystems.top
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-accent/10 rounded-xl">
                  <p className="text-sm text-accent">
                    <strong>Important Notice:</strong> Eclipse Systems VPS Initiative is a volunteer-run, non-commercial hobby project. It is not a registered company or legal entity and does not have employees.
                  </p>
                </div>
              </div>
            </section>

            {/* Important Notice */}
            <div className="glass-effect rounded-2xl p-6 border-2 border-destructive/50 bg-destructive/5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-destructive">IMPORTANT NOTICE</h3>
                  <p className="text-sm text-destructive/80">By using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
                </div>
              </div>
              <p className="text-destructive/90">
                <strong>Violation of these Terms may result in immediate account termination and legal action.</strong>
              </p>
            </div>

            {/* Footer */}
            <div className="text-center pt-8 border-t border-border/50">
              <p className="text-muted-foreground">
                <strong>Last Updated:</strong> August 19, 2025 | <strong>Version:</strong> 1.0
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                For questions about these Terms of Service, contact us at legal@eclipsesystems.top
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
