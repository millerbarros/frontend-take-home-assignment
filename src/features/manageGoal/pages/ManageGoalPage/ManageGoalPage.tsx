import React, { FormEvent, useMemo, useState } from 'react';

// HELPERS
import { formatMonth, formatYear, monthsDiff } from '~/shared/helpers/date';
import { formatCurrency } from '~/shared/helpers/currency';

// COMPONENTS
import { CurrencyInput } from '../../components/CurrencyInput';
import { FormGroup } from '../../components/FormGroup';
import { MonthInput } from '../../components/MonthInput';
import { Card } from '~/shared/components/Card';
import { GoalAvatar } from '~/shared/components/GoalAvatar';
import { PageTitle } from '~/shared/components/PageTitle';
import { DefaultLayout } from '~/layouts/Default';

// STYLED COMPONENTS
import {
  StyledManageGoalForm,
  StyledManageGoalFormGrid,
  StyledButton,
  StyledInfoPanel
} from './ManageGoalPage.styles';

// ASSETS
import DollarSignIcon from '~/assets/icons/dollar-sign.svg';
import HouseIcon from '~/assets/icons/house.svg';

export const ManageGoalPage = () => {
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
      <PageTitle>
        Let{"'"}s plan your <strong>saving goal</strong>.
      </PageTitle>

      <Card>
        <GoalAvatar
          icon={HouseIcon}
          title="Buy a house"
          subtitle="Saving goal"
        />

        <StyledManageGoalForm onSubmit={onSubmit}>
          <StyledManageGoalFormGrid>
            <FormGroup label="Total amount" htmlFor="amount">
              <CurrencyInput
                id="amount"
                icon={DollarSignIcon}
                placeholder="25,000"
                value={amount}
                onChange={setAmount}
              />
            </FormGroup>

            <FormGroup label="Reach goal by" htmlFor="goal">
              <MonthInput value={goalDate} onChange={setGoalDate} />
            </FormGroup>
          </StyledManageGoalFormGrid>

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
        </StyledManageGoalForm>
      </Card>
    </DefaultLayout>
  );
};
