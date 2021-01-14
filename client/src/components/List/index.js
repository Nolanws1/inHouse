import React from "react";
import "./style.css";
import { useAuth0 } from '@auth0/auth0-react';

// This file exports both the List and ListItem components

export function List({ children }) {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="list-overflow-container">
        <ul className="list-group">{children}</ul>
      </div>
    )
  );
}

export function ListItem({ children }) {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <li className="list-group-item">{children}</li>
    )
  )
}
