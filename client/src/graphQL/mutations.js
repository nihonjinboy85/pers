import { gql } from '@apollo/client';

export const ADD_ACCOUNT = gql`
  mutation AddAccount($accountName: String!) {
    addAccount(accountName: $accountName) {
      _id
      name
    }
  }
`;

export const UPDATE_ACCOUNT = gql`
  mutation UpdateAccount($accountId: ID!, $updatedAccountName: String!) {
    updateAccount(
      accountId: $accountId
      updatedAccountName: $updatedAccountName
    ) {
      _id
      name
    }
  }
`;

export const DELETE_ACCOUNT = gql`
  mutation DeleteAccount($accountId: ID!) {
    deleteAccount(accountId: $accountId)
  }
`;

export const ADD_TRANSACTION = gql`
  mutation AddTransaction(
    $description: String!
    $recurrence: RecurrenceOptions!
    $amount: Float!
    $type: TransactionTypes!
    $startDate: String!
    $accountId: ID!
  ) {
    addTransaction(
      description: $description
      recurrence: $recurrence
      amount: $amount
      type: $type
      startDate: $startDate
      accountId: $accountId
    ) {
      _id
      description
      recurrence
      amount
      type
      startDate
    }
  }
`;

export const UPDATE_TRANSACTION = gql`
  mutation updateTransaction(
    $transactionId: ID!
    $description: String!
    $recurrence: RecurrenceOptions!
    $amount: Float!
    $type: TransactionTypes!
    $startDate: String!
  ) {
    updateTransaction(
      transactionId: $transactionId
      description: $description
      recurrence: $recurrence
      amount: $amount
      type: $type
      startDate: $startDate
    ) {
      description
      recurrence
      amount
      type
      startDate
      account {
        name
      }
    }
  }
`;

export const DELETE_TRANSACTION = gql`
  mutation DeleteTransaction($transactionId: ID!) {
    deleteTransaction(transactionId: $transactionId)
  }
`;
