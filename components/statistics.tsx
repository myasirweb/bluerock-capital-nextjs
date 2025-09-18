import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    number: "15+",
    label: "Years of Experience",
    description: "Serving clients with professional investment services",
  },
  {
    number: "€2.5B+",
    label: "Assets Under Management",
    description: "Managing diverse portfolios across multiple markets",
  },
  {
    number: "5,000+",
    label: "Active Clients",
    description: "Trusted by investors across Romania and Europe",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    description: "Consistently high ratings from our valued clients",
  },
]

export default function Statistics() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Our commitment to excellence is reflected in our performance metrics and client satisfaction scores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 text-center hover:bg-slate-700 transition-colors duration-300"
            >
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-blue-400 mb-4">{stat.number}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{stat.label}</h3>
                <p className="text-gray-300 text-sm text-pretty">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 text-balance">Authorized and Regulated</h3>
              <p className="text-gray-300 mb-6 text-pretty">
                We are a financial services company authorized in accordance with the Romanian capital market
                legislation which transposes the provisions of Directive 2014/65 / EU (MiFID II), established in 1997,
                operating until June 5, 2014 under the name of Transilvania Capital.
              </p>
              <p className="text-gray-300 text-pretty">
                Since 2011, the company is 99.99% owned by the Austrian shareholder Blue Rock Capital GmbH.
              </p>
            </div>
            <div className="bg-slate-600 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Regulatory Information</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>License Number:</span>
                  <span className="text-blue-400">PJR01INCR/400006</span>
                </div>
                <div className="flex justify-between">
                  <span>Established:</span>
                  <span className="text-blue-400">1997</span>
                </div>
                <div className="flex justify-between">
                  <span>Regulated by:</span>
                  <span className="text-blue-400">ASF Romania</span>
                </div>
                <div className="flex justify-between">
                  <span>MiFID II Compliant:</span>
                  <span className="text-green-400">Yes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
