import type { UnixTime } from '@l2beat/shared-pure'
import { NoDataBadge } from '~/components/badge/NoDataBadge'
import { ValueSecuredBreakdown } from '~/components/breakdown/ValueSecuredBreakdown'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '~/components/core/tooltip/Tooltip'
import { VerticalSeparator } from '~/components/core/VerticalSeparator'
import { CustomLink } from '~/components/link/CustomLink'
import { Square } from '~/components/Square'
import { ValueWithPercentageChange } from '~/components/table/cells/ValueWithPercentageChange'
import { RoundedWarningIcon } from '~/icons/RoundedWarning'
import type { ProjectScalingEntry } from '~/server/features/scaling/project/getScalingProjectEntry'
import { cn } from '~/utils/cn'
import { unifyPercentagesAsIntegers } from '~/utils/math'
import { formatCurrency } from '~/utils/number-format/formatCurrency'

export interface ValueSecuredSummaryProps {
  tvs: NonNullable<ProjectScalingEntry['header']['tvs']> | undefined
  detailedBreakdownHref: string
  archivedAt?: UnixTime | undefined
}

export function ValueSecuredSummary(props: ValueSecuredSummaryProps) {
  const params = getParams(props.tvs)

  const tvsStats = [
    {
      label: 'Canonically Bridged',
      shortLabel: 'Canonical',
      value: formatCurrency(params.breakdown.canonical, 'usd'),
      usage: params.usage.canonical,
      icon: <Square variant="canonical" size="small" />,
    },
    {
      label: 'Natively Minted',
      shortLabel: 'Native',
      value: formatCurrency(params.breakdown.native, 'usd'),
      usage: params.usage.native,
      icon: <Square variant="native" size="small" />,
    },
    {
      label: 'Externally Bridged',
      shortLabel: 'External',
      value: formatCurrency(params.breakdown.external, 'usd'),
      usage: params.usage.external,
      icon: <Square variant="external" size="small" />,
    },
  ]

  return (
    <div
      className={cn(
        'md:col-span-2 md:grid md:grid-cols-[1fr_1px_1fr] md:gap-x-8 md:gap-y-4 md:rounded-lg md:bg-header-secondary md:p-6',
        '[@media(min-width:1000px)]:col-span-1 [@media(min-width:1000px)]:flex [@media(min-width:1000px)]:flex-col',
      )}
    >
      <div className="flex w-full flex-wrap items-baseline justify-between md:gap-2">
        <span className="font-medium text-lg md:hidden md:font-normal md:text-gray-500 md:text-xs md:dark:text-gray-600">
          Value secured
        </span>
        <span className="hidden font-bold text-lg text-secondary md:block md:font-normal md:text-xs">
          TVS
        </span>

        <div className="flex items-center gap-1">
          {params.breakdown.total > 0 || !!props.archivedAt ? (
            <ValueWithPercentageChange
              className="font-bold text-lg md:text-2xl md:leading-none"
              changeClassName="text-xs font-bold md:text-base md:w-[58px]"
              change={params.breakdown.totalChange}
            >
              {formatCurrency(params.breakdown.total, 'usd')}
            </ValueWithPercentageChange>
          ) : (
            <NoDataBadge />
          )}
          {props.tvs?.warning ? (
            <Tooltip>
              <TooltipTrigger>
                <RoundedWarningIcon
                  className="size-4"
                  sentiment={props.tvs.warning.sentiment}
                />
              </TooltipTrigger>
              <TooltipContent>{props.tvs.warning.value}</TooltipContent>
            </Tooltip>
          ) : null}
        </div>
        <ValueSecuredBreakdown
          canonical={params.usage.canonical}
          external={params.usage.external}
          native={params.usage.native}
          className="my-3 hidden h-1 w-full md:my-0 md:flex [@media(min-width:1000px)]:hidden"
        />
      </div>
      <ValueSecuredBreakdown
        canonical={params.usage.canonical}
        external={params.usage.external}
        native={params.usage.native}
        className="my-3 h-1 w-full md:my-0 md:hidden [@media(min-width:1000px)]:flex"
      />
      <VerticalSeparator className="row-span-2 hidden w-px max-md:border-none md:block [@media(min-width:1000px)]:hidden" />
      <div className="@container row-span-2 flex h-1/2 flex-wrap gap-3 md:h-full md:gap-0 [@media(min-width:1000px)]:h-1/2">
        {tvsStats.map((s, i) => (
          <div
            key={i}
            className="flex w-full flex-nowrap items-center justify-between gap-1"
          >
            <div className="flex items-center gap-1">
              {s.icon}
              <span className="text-secondary text-xs leading-none">
                <span className="inline md:hidden">{s.label}</span>
                <span className="hidden md:inline">{s.shortLabel}</span>
              </span>
            </div>
            <span className="whitespace-nowrap font-medium text-base leading-none">
              {s.value}
              {params.breakdown.total > 0 && (
                <span className="@[210px]:inline-block hidden w-[54px] text-right font-normal text-secondary">
                  {` (${s.usage}%)`}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
      {params.breakdown.total > 0 ? (
        <div className="mt-2 flex justify-center md:mt-0">
          <CustomLink href={props.detailedBreakdownHref} className="text-xs">
            View TVS Breakdown
          </CustomLink>
        </div>
      ) : null}
    </div>
  )
}

function getParams(tvs: ValueSecuredSummaryProps['tvs']) {
  if (!tvs?.breakdown) {
    return {
      breakdown: {
        total: 0,
        canonical: 0,
        external: 0,
        native: 0,
        totalChange: 0,
      },
      usage: {
        canonical: 1,
        external: 1,
        native: 1,
      },
    }
  }

  const [canonical, external, native] = unifyPercentagesAsIntegers([
    tvs.breakdown.total === 0
      ? 100 / 3
      : (tvs.breakdown.canonical / tvs.breakdown.total) * 100,
    tvs.breakdown.total === 0
      ? 100 / 3
      : (tvs.breakdown.external / tvs.breakdown.total) * 100,
    tvs.breakdown.total === 0
      ? 100 / 3
      : (tvs.breakdown.native / tvs.breakdown.total) * 100,
  ] as const)

  return {
    breakdown: tvs.breakdown,
    usage: {
      canonical,
      external,
      native,
    },
  }
}
