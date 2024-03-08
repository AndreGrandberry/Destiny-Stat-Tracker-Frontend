import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReturnHomeButton from './ReturnHomeButton';
import { convertTimestamp } from './DashboardFunctions';
import './Dashboard.css'; 

const Dashboard = () => {
    const [metricsData, setMetricsData] = useState({});     // Set
    const [selectedCategory, setSelectedCategory] = useState('Seasons'); // Set the default selected category to Seasons
    const [membershipId, setMembershipId] = useState('');
    const [displayName, setDisplayName] = useState('');    // Prep membershipId and displayName to be used later in return statement
  
    useEffect(() => {
      // Extract membershipId from query parameters
      const queryParams = new URLSearchParams(window.location.search);
      const memberId = queryParams.get('membershipId');
      // Set the extracted membershipId in state
      if (memberId) {
        setMembershipId(memberId);
      }
    }, []);
  
    useEffect(() => {
      // Function to fetch metrics data based on membershipId
      const fetchMetricsData = async () => {
        try {
          // Fetch metrics data from the backend API using the membershipId
          const response = await axios.get(`https://surely-gentle-tiger.ngrok.io/api?membershipId=${membershipId}`);
          // Set the fetched metrics data in state
          setMetricsData(response.data.organizedData);
          setDisplayName(response.data.displayName);
          
        } catch (error) {
          console.error('Error fetching metrics data:', error);
        }
      };
  
      // Call the fetchMetricsData function when membershipId changes
      if (membershipId) {
        fetchMetricsData();
      }
    }, [membershipId]);
  
    return (
      <div>
        <h1 className="title">Destiny Stat Tracker</h1>
        <p className='intro'>Your stats for various Destiny 2 activities pulled from the Bungie database</p>
        <ReturnHomeButton />
        <p className="displayName">Welcome, {displayName}</p>
        {/* Render category names */}
        <div className="categories">
          {Object.keys(metricsData).map(category => (
            <div
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category ${selectedCategory === category ? 'selected' : ''}`}
            >
              {category}
            </div>
          ))}
        </div>
  
        {/* Render metrics for the selected category */}
        <div className="metrics">
          {selectedCategory &&
            Object.keys(metricsData[selectedCategory] || {}).map(group => (
              <div className="metric-group" key={group}> {/* Organize metrics by groups*/}
                <h3>{group}</h3>
                {metricsData[selectedCategory][group].map(metric => (
                  <div key={metric.name} className="metric">
                    <h4>{metric.name}</h4>
                    <p>{metric.description}</p>
                    <p className='progress'>Progress: {metric.description.startsWith('The fastest completion')
                    ? convertTimestamp(metric.progress) // Convert progress to timestamp
                    : metric.progress // Otherwise, use the original progress value
                    }</p>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    );
  };
  

export default Dashboard