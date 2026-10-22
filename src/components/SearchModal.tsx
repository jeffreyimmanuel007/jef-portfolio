'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEARCH_ITEMS = [
  { title: 'Automated CI/CD Pipeline', category: 'Project', href: '/projects', snippet: 'GitHub Actions, ArgoCD, Docker microservices deployment' },
  { title: 'Multi-Region VPC Setup', category: 'Project', href: '/projects', snippet: 'Terraform-managed multi-region networking with private peering' },
  { title: 'EKS Cluster Autoscale', category: 'Project', href: '/projects', snippet: 'Karpenter rapid cluster autoscaling with Prometheus & Grafana' },
  { title: 'Serverless Event API', category: 'Project', href: '/projects', snippet: 'AWS Lambda, DynamoDB, API Gateway with OpenAPI validation' },
  { title: 'Cloud Log Analytics', category: 'Project', href: '/projects', snippet: 'ELK Stack, Logstash, Kibana security threat detection' },
  { title: 'IaC Framework', category: 'Project', href: '/projects', snippet: 'Modular Terraform landing zones with Checkov & TFLint' },
  { title: 'AWS Solutions Architect Professional', category: 'Certification', href: '/certifications', snippet: 'Professional Level validated credential' },
  { title: 'CKA Certified Kubernetes Administrator', category: 'Certification', href: '/certifications', snippet: 'CNCF Kubernetes validated credential' },
  { title: 'Azure Solutions Architect Expert', category: 'Certification', href: '/certifications', snippet: 'Microsoft Azure Expert Level credential' },
  { title: 'HashiCorp Certified Terraform Associate', category: 'Certification', href: '/certifications', snippet: 'Infrastructure as Code validated credential' },
  { title: 'Python (Scripting & Automation)', category: 'Skill', href: '/certifications', snippet: '95% proficiency in automation and operational scripts' },
  { title: 'Bash / Shell Scripting', category: 'Skill', href: '/certifications', snippet: '90% proficiency in Linux systems and container orchestration' },
  { title: 'Resume & Contact Details', category: 'Contact', href: '/contact', snippet: 'Direct contact form, LinkedIn, GitHub, and Resume download' },
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = SEARCH_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.snippet.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[95] flex items-start justify-center p-4 pt-20 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="w-full max-w-xl bg-surface rounded-2xl border border-outline-variant shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-outline-variant flex items-center gap-3 bg-surface-container">
          <span className="material-symbols-outlined text-secondary">search</span>
          <input
            type="text"
            placeholder="Search projects, skills, certifications, docs..."
            className="w-full bg-transparent border-none outline-none font-body-md text-sm text-primary placeholder:text-on-surface-variant/60"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-1 rounded-full text-on-surface-variant hover:bg-surface-variant">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-sm text-on-surface-variant">
              No matching results found for &quot;{query}&quot;
            </div>
          ) : (
            filtered.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="flex items-start justify-between p-3 rounded-lg hover:bg-surface-variant transition-colors group"
              >
                <div>
                  <h5 className="font-bold text-sm text-primary group-hover:text-secondary">{item.title}</h5>
                  <p className="text-xs text-on-surface-variant line-clamp-1">{item.snippet}</p>
                </div>
                <span className="text-[10px] font-label-sm font-semibold uppercase px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                  {item.category}
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
