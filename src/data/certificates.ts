import redshift from '../../public/certificates/amazon-redshift.png'
import serverless from '../../public/certificates/serverless-analytics.png'
import athena from '../../public/certificates/amazon-athena.png'
import glue from '../../public/certificates/aws-glue.png'
import emr from '../../public/certificates/amazon-emr.png'
import type { StaticImageData } from 'next/image'

export type Certificate = {
  id: string
  title: string
  issuer: string
  date: string
  image: StaticImageData
  skills: string[]
}

export const CERTIFICATES: Certificate[] = [
  { id: 'amazon-redshift', title: 'Getting Started with Amazon Redshift', issuer: 'Amazon Web Services (AWS)', date: '18 de Setembro, 2026', image: redshift, skills: ['Amazon Redshift', 'Data Warehousing', 'SQL'] },
  { id: 'serverless-analytics', title: 'Serverless Analytics', issuer: 'Amazon Web Services (AWS)', date: '18 de Setembro, 2026', image: serverless, skills: ['Serverless Computing', 'AWS Analytics', 'Data Pipelines'] },
  { id: 'amazon-athena', title: 'Introduction to Amazon Athena', issuer: 'Amazon Web Services (AWS)', date: '18 de Setembro, 2026', image: athena, skills: ['Amazon Athena', 'Data Lakes', 'SQL Queries'] },
  { id: 'aws-glue', title: 'AWS Glue Getting Started', issuer: 'Amazon Web Services (AWS)', date: '18 de Setembro, 2026', image: glue, skills: ['AWS Glue', 'ETL', 'Big Data'] },
  { id: 'amazon-emr', title: 'Amazon EMR Getting Started', issuer: 'Amazon Web Services (AWS)', date: '18 de Setembro, 2026', image: emr, skills: ['Amazon EMR', 'Apache Spark', 'Hadoop'] },
]
