import React, { FormEvent, useMemo, useState } from 'react';

// HELPERS
import { formatMonth, formatYear, monthsDiff } from '~/helpers/date';
import { formatCurrency } from '~/helpers/currency';

// COMPONENTS
import { Card } from '~/components/Card';
import { CurrencyInput } from '~/components/CurrencyInput';
import { GoalAvatar } from '~/components/GoalAvatar';
import { FormGroup } from '~/components/FormGroup';
import { MonthInput } from '~/components/MonthInput';
import { DefaultLayout } from '~/layouts/Default';

// STYLED COMPONENTS
import {
  StyledPageTitle,
  StyledMainPageForm,
  StyledMainPageFormGrid,
  StyledButton,
  StyledInfoPanel
} from './MainPage.styles';

// ASSETS
import DollarSignIcon from '~/assets/icons/dollar-sign.svg';
import HouseIcon from '~/assets/icons/house.svg';

export const MainPage = () => {
  const [amount, setAmount] = useState('25000');
  const [goalDate, setGoalDate] = useState(new Date().toISOString());

  const monthsToReach = useMemo(() => monthsDiff(new Date(), goalDate), [
    goalDate
  ]);
  const monthlyAmount = useMemo(
    () => Math.ceil(amount ? Number(amount) / monthsToReach : 0),
    [amount, monthsToReach]
  );

  const onSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <DefaultLayout>
      <StyledPageTitle>
        Let{"'"}s plan your <strong>saving goal</strong>.
      </StyledPageTitle>

      <Card>
        <GoalAvatar
          icon={HouseIcon}
          title="Buy a house"
          subtitle="Saving goal"
        />

        <StyledMainPageForm onSubmit={onSubmit}>
          <StyledMainPageFormGrid>
            <FormGroup label="Total amount" htmlFor="amount">
              <CurrencyInput
                id="amount"
                icon={DollarSignIcon}
                placeholder="25,000"
                value={amount}
                onChange={value => setAmount(value || '')}
              />
            </FormGroup>

            <FormGroup label="Reach goal by" htmlFor="goal">
              <MonthInput value={goalDate} onChange={setGoalDate} />
            </FormGroup>
          </StyledMainPageFormGrid>

          <StyledInfoPanel
            title="Monthly amount"
            highlightText={formatCurrency(monthlyAmount)}
          >
            You’re planning <strong>{monthsToReach} monthly</strong> deposits to{' '}
            reach your <strong>{formatCurrency(amount)}</strong> goal by{' '}
            <strong>
              {formatMonth(goalDate)} {formatYear(goalDate)}
            </strong>
            .
          </StyledInfoPanel>

          <StyledButton>Confirm</StyledButton>
        </StyledMainPageForm>
      </Card>
    </DefaultLayout>
  );
};
