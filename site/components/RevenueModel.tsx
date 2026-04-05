import { FadeIn } from './Motion'

const products = [
  {
    name: 'Glass Jar (160g)',
    msrp: '490 THB',
    wholesale: '294-343 THB',
    margin: '30-40%',
  },
  {
    name: 'Paper Sachet (16g)',
    msrp: '290 THB',
    wholesale: '174-203 THB',
    margin: '30-40%',
  },
  {
    name: 'Single Sachet (2g)',
    msrp: '9-12 THB',
    wholesale: '5-8 THB',
    margin: '30-40%',
  },
]

export default function RevenueModel() {
  return (
    <section className="py-[clamp(64px,8vw,100px)] px-[clamp(24px,5vw,64px)]">
      <FadeIn className="max-w-[900px] mx-auto">
        <div className="text-center mb-[clamp(48px,8vw,80px)]">
          <div className="gold-line" />
          <p className="label-uppercase text-[12px] tracking-[.22em] text-ink-light mb-5">
            Revenue Model
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,48px)] font-normal leading-[1.15] text-mineral tracking-tight">
            Built for <em>healthy margins</em>
          </h2>
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border-warm">
                <th className="text-[12px] font-semibold tracking-[.1em] uppercase text-ink-light pb-4 pr-4">
                  Product
                </th>
                <th className="text-[12px] font-semibold tracking-[.1em] uppercase text-ink-light pb-4 pr-4">
                  MSRP
                </th>
                <th className="text-[12px] font-semibold tracking-[.1em] uppercase text-ink-light pb-4 pr-4">
                  Wholesale
                </th>
                <th className="text-[12px] font-semibold tracking-[.1em] uppercase text-ink-light pb-4">
                  Margin
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.name} className="border-b border-border-warm/50">
                  <td className="py-4 pr-4 text-[15px] font-medium text-mineral">
                    {item.name}
                  </td>
                  <td className="py-4 pr-4 text-[15px] font-light text-ink-light">
                    {item.msrp}
                  </td>
                  <td className="py-4 pr-4 text-[15px] font-light text-ink-light">
                    {item.wholesale}
                  </td>
                  <td className="py-4 text-[15px] font-medium text-gold">
                    {item.margin}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="sm:hidden space-y-4">
          {products.map((item) => (
            <div key={item.name} className="border border-border-warm rounded-xl p-5">
              <h3 className="font-medium text-mineral text-[15px] mb-3">{item.name}</h3>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-[12px] font-medium tracking-[.1em] uppercase text-ink-light mb-1">MSRP</div>
                  <div className="text-[15px] font-light text-ink-light">{item.msrp}</div>
                </div>
                <div>
                  <div className="text-[12px] font-medium tracking-[.1em] uppercase text-ink-light mb-1">Wholesale</div>
                  <div className="text-[15px] font-light text-ink-light">{item.wholesale}</div>
                </div>
                <div>
                  <div className="text-[12px] font-medium tracking-[.1em] uppercase text-ink-light mb-1">Margin</div>
                  <div className="text-[15px] font-medium text-gold">{item.margin}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LTV statement */}
        <div className="text-center mt-12 p-8 border border-gold/30 rounded-xl">
          <p className="font-display text-[clamp(20px,3vw,28px)] font-normal text-mineral leading-[1.3]">
            Customer lifetime value:{' '}
            <span className="text-gold">3,600-4,800 THB</span>
          </p>
          <p className="text-[14px] font-light text-ink-light mt-2">
            Based on daily use at 365 days/year with 90% retention
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
