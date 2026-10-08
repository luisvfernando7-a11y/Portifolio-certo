export type Certificate = {
  id: string
  title: string
  issuer: string
  date: string
  image: string
  skills: string[]
}

export const CERTIFICATES: Certificate[] = [
  { id: 'amazon-redshift', title: 'Getting Started with Amazon Redshift', issuer: 'Amazon Web Services (AWS)', date: '18 de Setembro, 2026', image: '/certificates/amazon-redshift.jpg', skills: ['Amazon Redshift', 'Data Warehousing', 'SQL'] },
  { id: 'serverless-analytics', title: 'Serverless Analytics', issuer: 'Amazon Web Services (AWS)', date: '18 de Setembro, 2026', image: '/certificates/serverless-analytics.png', skills: ['Serverless Computing', 'AWS Analytics', 'Data Pipelines'] },
  { id: 'amazon-athena', title: 'Introduction to Amazon Athena', issuer: 'Amazon Web Services (AWS)', date: '18 de Setembro, 2026', image: '/certificates/amazon-athena.jpg', skills: ['Amazon Athena', 'Data Lakes', 'SQL Queries'] },
  { id: 'aws-glue', title: 'AWS Glue Getting Started', issuer: 'Amazon Web Services (AWS)', date: '18 de Setembro, 2026', image: '/certificates/aws-glue.png', skills: ['AWS Glue', 'ETL', 'Big Data'] },
  { id: 'amazon-emr', title: 'Amazon EMR Getting Started', issuer: 'Amazon Web Services (AWS)', date: '18 de Setembro, 2026', image: '/certificates/amazon-emr.png', skills: ['Amazon EMR', 'Apache Spark', 'Hadoop'] },
]
