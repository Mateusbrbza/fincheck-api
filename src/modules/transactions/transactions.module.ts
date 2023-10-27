import { Module } from '@nestjs/common';
import { TransactionsService } from './services/transactions.service';
import { TransactionsController } from './transactions.controller';
import { BankAccountsModule } from '../bank-accounts/bank-accounts.module';
import { CategoriesModule } from '../categories/categories.module';
import { ValidateCategoryOwnershipService } from '../categories/services/validate-category-ownership.service';
import { ValidateTransactionOwnershipService } from './services/validate-transaction-ownership.service';

@Module({
  imports: [BankAccountsModule, CategoriesModule],
  controllers: [TransactionsController],
  providers: [
    TransactionsService,
    ValidateCategoryOwnershipService,
    ValidateTransactionOwnershipService,
  ],
})
export class TransactionsModule {}
